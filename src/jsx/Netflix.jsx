import React from 'react'; 
import Card from './Card';
import Sdata from './Sdata';
// import NetflixD from './NetflixD';
// import AmazonD from './AmazonD';

// const Favseries="netflix";

// const Favs=()=>{
//     if(Favseries=='netflix')
//     {
//         return <NetflixD></NetflixD>;
//     }
//     else{
//         return <AmazonD></AmazonD>;
//     }
// }
const Netflix=()=>{
    return (
     <>
   
     <h1 className="heading_style">List of top 5 netflix series</h1>    
     
     {/* <Card 
     img_src={Sdata[0].img_src}
     title={Sdata[0].title}
     sname={Sdata[0].sname}
     link={Sdata[0].link}
      /> */}
      {Sdata.map((val)=>{
       return ( 
         <Card 
         key={val.id}
         img_src={val.img_src}
         title={val.title}
         sname={val.sname}
         link={val.link}
       />);
      })}   
      {/* <Favs></Favs> */}
      {/*Ternary Operator*/}
      {/* {(Favseries=='netflix')?<NetflixD></NetflixD>:<AmazonD></AmazonD>} */}
   </>
    );
   };
   
   export default Netflix;