import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";



function TodoSearch () {

    const {
        state,
        setSate,
    } = useContext(TodoContext)


    return (
        <input 
        className="input" 
        value={state} 
        placeholder="Filter here by Name" 
        onChange={(event)=>{
            setSate(event.target.value)
        }} />
    )
}


export default TodoSearch; 