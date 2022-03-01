import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import './pages.css';

import image1 from "./images/comminutyWork.png"

function Home() {
  return (
    <>
    
    <main>

      <div className="container">
        
          

        <div className="content">
        <h1>Working together as a Comminuty !</h1>
        <p className="description">
              Nobody's going to fix the world for us, but
      working together, making use of technological
      innovations and human communities alike, we
      might just be able to fix it ourselves.
        </p>
       
        <ul> <li> <Link to="/SignUp" className="button"> SignUP</Link> </li></ul>
        </div>

<div className="images">
        <img src={image1} alt="heloo" />    
        </div>
      
      
      </div>
      
    </main>
    </>

  )
}

export default Home