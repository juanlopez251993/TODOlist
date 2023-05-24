import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";


function TodoCounter () {

    const {
        totalTodos,
        completedTodos,
    } = useContext(TodoContext)
    
    return (
        <>
        <h1 className="Titulo"> Lista Mercar </h1>
        <h1 className="TodoCounter">
            Has completado 
            <span className="completed"> {completedTodos} </span> de <span className="total"> {totalTodos} </span> 
        </h1>
        </>
    )
}


export default TodoCounter ;