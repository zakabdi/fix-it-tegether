import React from 'react';
import { Route, Link, Switch } from "react-router-dom";


import './component.css';

function Header(props) {

    

    return (
        <div className="Header">

            <nav className="nav">

            
            <a  href="http://localhost:3000/" className="logo"> &#9776;</a>
           
            <ul className='ul'>
                <li className='li'> <Link to="/">Home </Link> </li>

                <li className='li'> <Link to="/About"> About </Link></li>

                <li className='li'> <Link to="/Contact">Contact </Link></li>

                <li className='li'> <Link to="/Login"> login</Link> </li>

                
            </ul>

         


            </nav>

               
        

        </div>
    )
}

// const arr = ["Home", "about", "contact", "blog" ];
   {/* <ul>  {arr.map(function(item) { return <li to="">{item}</li>  })}   </ul> */}
export default Header;
