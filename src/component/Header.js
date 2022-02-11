import React from 'react';
import { Route, Link, Switch } from "react-router-dom";


import './component.css';

function Header(props) {

    

    return (
        <div className="Header">

            <nav className="nav">

            
            <a  href="www.facebook.com" className="logo"> &#9776;</a>
           
            <ul>
                <li> <Link to="/">Home </Link> </li>

                <li> <Link to="/About"> About </Link></li>

                <li> <Link to="/Contact">Contact </Link></li>

                <li> <Link to="/Blog"> books</Link> </li>
            </ul>

         


            </nav>


        
        
         


        </div>
    )
}

// const arr = ["Home", "about", "contact", "blog" ];
   {/* <ul>  {arr.map(function(item) { return <li to="">{item}</li>  })}   </ul> */}
export default Header;
