import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";



function Agregar () {

    const {
        setOpenModal,
        addTodo

    } = useContext(TodoContext)

    const [newTodoValue, setnewTodoValue] = useState('')


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    } 

    const onCancel = () => {
        setOpenModal(false)
    };
    
    const onChange = (event) => {
        setnewTodoValue(event.target.value)

    }



    return (
        <form className="Agregar" onSubmit={onSubmit}>
            <h2 className="text-center">ADD ANYTHING</h2>
            <textarea value={newTodoValue} onChange={onChange} className="input-text" type="text" placeholder="Agrega Items" />
            <div className="text-center">
                <button className="button-cancel" onClick={onCancel}>Cancel</button>
                <button className="button-add">Add</button>
            </div>
        </form>

    )

}

export {Agregar}