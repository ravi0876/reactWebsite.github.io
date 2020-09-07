import React, { createContext } from 'react';
import CompA from './CompA';
const Firstname=createContext();
const Lasttname=createContext();
const App =()=>{
  return (
    <>
    <Firstname.Provider value={'Abc'}>
      <Lasttname.Provider value={"def"}>
        <CompA/>
      </Lasttname.Provider>
    </Firstname.Provider>
    </>
  );
};

export default App;
export {Firstname,Lasttname};