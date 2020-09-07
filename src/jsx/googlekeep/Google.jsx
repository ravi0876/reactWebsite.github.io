import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const GoogleKeep=()=>{
    const [addItem,setAddItem]=useState([]);
    const addNote=(note)=>{
        // alert('i am clicked');
        setAddItem((olddata)=>{
            return [...olddata,note];
        })
    };
    const onDelete = (id) => {
        setAddItem((olddata)=>
            olddata.filter((currddata,index)=>{
                return index !=id;
            })
        );
    };
    return(
        <>
            <Header/>
            <CreateNote passNote={addNote}/>
             
            {addItem.map((val,index)=>{
              return (<Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelete}
              />);   
            })}
            <Footer/>
        </>
    );
};
export default GoogleKeep;