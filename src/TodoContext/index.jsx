import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({children}) {

    const {item: todos, saveItem: saveTodos, Loading, Error} = useLocalStorage('TODOS_V1', []);
    const [state, setSate] = useState('');

    const [openModal, setOpenModal] = useState(false)


    const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;

    const totalTodos = todos.length

    const searchedTodos = todos.filter(
    (todo) => {
        return todo.text.toLowerCase().includes(state.toLowerCase())
    }
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);

    }

    const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
    };

    const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
    }



    return(
        <TodoContext.Provider value={{
            Loading,
            Error,
            completedTodos,
            totalTodos,
            state,
            setSate,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo

        }}>
            {children}
        </TodoContext.Provider>
        
    )
}






export { TodoContext, TodoProvider }