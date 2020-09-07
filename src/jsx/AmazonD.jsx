import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const AmazonD=()=>{
    return (
        <Card 
         key={Sdata[2].id}
         img_src={Sdata[2].img_src}
         title={Sdata[2].title}
         sname={Sdata[2].sname}
         link={Sdata[2].link}
         ></Card>
    );
};

export default AmazonD;