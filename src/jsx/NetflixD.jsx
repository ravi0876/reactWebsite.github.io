import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const NetflixD=()=>{
    return (
        <Card 
         key={Sdata[1].id}
         img_src={Sdata[1].img_src}
         title={Sdata[1].title}
         sname={Sdata[1].sname}
         link={Sdata[1].link}
         ></Card>
    );
};

export default NetflixD;