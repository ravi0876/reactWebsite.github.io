import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=(props)=>{
    const [expand,setExpand]=useState(false);
    const [note,setNote]=useState({
        title:'',
        content:'',
    });
    const inputEvent=(event)=>{
        // const value = event.target.value;
        // const name = event.target.name;

        const {name,value}=event.target;
        setNote((prevData)=>{
            return{
                 ...prevData,
                [name] : value,
            }
        });
    };
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };
    const expandIt=()=>{
        setExpand(true);
    };
    const onShrink=()=>{
        setExpand(false);
    }
    return(
        <>
            <div className="main_note" onDoubleClick={onShrink}>
                <form>
                    {expand?
                    <input type="text"
                     placeholder="Title" 
                     onChange={inputEvent} 
                     value={note.title}
                     name="title"
                     />: null}
                    <textarea rows="" 
                    column="" 
                    placeholder="Write a note..." 
                    onChange={inputEvent} 
                    value={note.content}
                    name="content"
                    autoComplete='off'
                    onClick={expandIt}
                    >
                    </textarea>
                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button> : null}
                </form>
            </div>
        </>
    );
};
export default CreateNote;