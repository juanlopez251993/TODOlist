import React, { useContext } from 'react';
import TodoCounter  from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodosError from '../Loading/TodosError';
import TodosLoading from '../Loading/TodosLoading';
import EmptyTodos from '../Loading/EmptyTodos';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoItem from '../components/TodoItem';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { Agregar } from '../Modal/Agregar';


function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext)

    


return (


    <>
    <div className="App">
        <div className='Cajahija' >

        <TodoCounter/>      
        <TodoSearch/> 

        <TodoList/>
            {loading && (
                <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>

                </>
            )}
        
        {error &&  <TodosError/>}
        {(!loading && searchedTodos.lenght === 0) && <EmptyTodos/>}
        
        {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onCompleted= {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
            />
            
            ))}
        <TodoList/>
    
        
        
        {openModal && (
        <Modal>
            <Agregar/>
        </Modal>
        )}
        </div>
        
        </div>
        <CreateTodoButton setOpenModal = {setOpenModal}/>
        </>
    );

}

export default AppUI;