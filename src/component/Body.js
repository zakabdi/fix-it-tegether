

import React, { useState } from 'react';

import Header from "./Header";
import Cat from "./Cat";
import Footer from "./Footer";
import { Route, Link, Switch } from "react-router-dom";
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import About from '../pages/About';
import data from "../data.js"


function Body() {

    const [books, setBooks] = useState(data);
    
    // console.log("books", books);

    return (
        <div className='body'>

           <Header />

           <Switch>

        <Route path="/Contact" >
            <Contact/>
        </Route>


        <Route path="/Blog">
            <Blog dataprops={books}/>
        </Route>

        <Route path="/About">
           <About/>
        </Route>

        <Route path="/">
           <Cat/>
        </Route>

        

        </Switch>

           <Footer />
            
        


        </div>
    )
}

export default Body;

