import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Poke=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();
    useEffect(()=>{
        // alert("hi");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            //no of moves
            setMoves(res.data.moves.length);
            //move name
            // setMoves(res.data.moves[17].move.name);
        }
        getData();
    });
    return(
        <>
            <h1>
            you choose <span style={{color:'red'}}> {num} value</span>
            </h1>
            <h1>
            My name is <span style={{color:'red'}}> {name}</span>
            </h1>
            <h1
            >I have <span style={{color:'red'}}> {moves} moves</span>
            </h1>
          <select value={num} onChange={(event)=>{
                setNum(event.target.value);
          }}>
              <option value='1'>1</option>
              <option value='25'>25</option>
              <option value='3'>3</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
          </select>  
        </>
    );
};
export default Poke;