import React from 'react';

const ToDoListD=(props)=>{
    
    return( 
        <>
            <div className="todo_style">
                <i className="fas fa-times" 
                onClick={
                    ()=>{
                    props.onSelect(props.id)}}>
                    </i>
                <li className="list_style">{props.text}</li>
            </div>
        </>);
};
export default ToDoListD;