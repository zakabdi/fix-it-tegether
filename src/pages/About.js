import React from 'react'
import image1 from "./images/about.png"
import './about.css';



function About() {
    return (
        <div>
            <div className="aboutContainer">

           

            <div className="aboutContent"> 
            <h1>About Us</h1>

            <p className="AboutDescription"> When we talk about healthy communities, we are referring to people working together to address what matters most to them. We have a lot of resources in various areas that need attention when building a community.
            the ability to work together with individuals and organizations is essential. And these relationships don’t materialize out of thin air (unfortunately).</p>  
            
            </div>

             <img src={image1} alt="about" />
            </div>
           
        </div>
    )
}

export default About;
