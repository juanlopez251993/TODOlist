import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'


function TodoItem(props) {
    return (
    
            <li className="list-item ">
                <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onCompleted}
                >
                    <AiOutlineCheckCircle/>
                </span>
                <p className="text-center letter-design">{props.text}</p>
                <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
                    <AiOutlineCloseCircle/>
                </span>

            </li>
        )
}

export default TodoItem;