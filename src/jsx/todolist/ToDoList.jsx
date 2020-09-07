import React, { useState } from 'react';
import TodoListD from "./TodoListD";
// import ToDoListD from './TodoListD';
const TodoList=()=>{
    const [inputList,setInputList]=useState("");
    const [items,setItems] = useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };
    const listItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })
        setInputList("");
    };
    const deleteItems=(id)=>{
      setItems((olditems)=>{
        return olditems.filter((arrElem,index)=>{
            return index!=id;
        })
      })  
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList}/>
                    <button onClick={listItems}>+</button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                       { 
                        items.map(
                            (itemval,index)=>
                            {
                               return <TodoListD 
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItems}
                                />
                            }
                        )}
                    </ol>
                </div>
            </div>
        </>
    );
};
export default TodoList;