import React from "react";
import { UNDO, DONE, DELETE, EDIT } from "../action";
import { useDispatch } from "../context";

export default ({text, id, isCompleted}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{text}</span>
            <span onClick={() => dispatch({type: isCompleted ? UNDO : DONE, payload:id})}>V</span>
            {
                isCompleted ? <span></span> : 
                <>
                    <span onClick={() => dispatch({type:DELETE, payload:id})}>X</span>
                    <span onClick={() => dispatch({type:EDIT, payload:id})}>Edit</span>
                </>
            }
        </li>
    )
}