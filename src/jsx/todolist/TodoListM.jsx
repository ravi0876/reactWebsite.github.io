import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TodoListMD from './TodoListMD';
const TodoListM=()=>{
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
    return(
    <>
        <div className="main_div">
            <div className="center_div">
                <h1>Todo List</h1>
                <input type="text" 
                 placeholder="Enter a text"
                 onChange={itemEvent} 
                 value={inputList}
                />
                <Button className="new_btn" onClick={listItems}>
                    <AddIcon/>
                </Button>
                <ol>
                   {
                       items.map((val,index)=>{
                            return <TodoListMD
                                key={index}
                                text={val}
                            />
                       })
                   }
                </ol>
            </div>
        </div>
    </>);
};
export default TodoListM;