import React from "react";


function CreateTodoButton ({setOpenModal}) {
    return (
        <button className="button" 
        
        onClick={
            
            () => {
                    setOpenModal(state => !state);
                }
        }  >
            + 
        </button>
    )
}


export default CreateTodoButton; 