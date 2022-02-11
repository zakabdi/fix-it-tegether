import React,{useEffect, useState} from 'react';
import CatCards from "./CatCards";

import './component.css';
import axios from "axios";


function Cat() {

 const [cats, setCats] = useState([]);
 

    
   useEffect( () =>{
   axios.get("https://api.thecatapi.com/v1/breeds")
   .then( (res)=>{
        
       setCats(res.data);
   })
   .catch( (error)=>{
       console.log(error);
   })

   },[]);

   

    return (
        <div className="Cat">
        
     {cats.map( function (cat){

         
     
     return <CatCards poroop={cat} />

     })}

        </div>
    )
}

export default Cat;
