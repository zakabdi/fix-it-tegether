





import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import '../Components/style.css';


function Footer() {
  return (
  <div className='main-Footer'>
          <div className='row'>
<div className="col">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Fix It Together | All rights reserved
          </p>
        </div>
        <div className='col-2'>
    <a href='youtube.com' className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="1.5x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="1.5x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x" />
      </a>
      <a
        href="https://www.github.com"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
        </div>
        </div>
  </div>
  )
}
export default Footer;


twitter.comtwitter.com
Twitter. It's what's happening.
From breaking news and entertainment to sports and politics, get the full story with all the live commentary.
1:26
---------------------------------------
1:26
SIGNIN COMPONENT
1:26
import React from 'react'
import "../Components/style.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
const signIn = () => {
    return(
        <div className='form'>
            <form>
            <h3>Sign In Your Account !!!</h3>
            <input type="text" placeholder='Username'></input>
            <input type="password" placeholder='Password'></input>
            <button type="submit">Sign In</button>
            <div className='already'>
              <p>I Don't Have an Account</p>
            <Link to="SignUp" className='Link' >Register</Link>
            </div>
            </form>
            <div className='col-2'>
    <a href='youtube.com' className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="1.5x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="1.5x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x" />
      </a>
      <a
        href="https://www.github.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
        </div>
        </div>
    )
}
export default signIn;
1:27
---------------------------------------
1:27
SIGNUP COMPONENT
1:29
import React, {useState} from 'react'
import "../Components/style.css";
import axios from 'axios';
import * as yup from 'yup';
import SignIn from './SignIn'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faUser,faLoock, faLock} from "@fortawesome/free-solid-svg-icons";
function SignUp(){
//State That stores tha values of inputs
const initialFormState= {
  firstName:"",
  lastName:"",
  userName:"",
  password:"",
  email:"",
  zipCode:"",
  state:"",
  city:""
}
const [formState, setFormState] = useState(initialFormState);
const [errors, setErrors] = useState(initialFormState);
//HandleChange Function
const handleChange = (event) => {
  const inputData =  {...formState,
  [event.target.name] : event.target.value}
  handleValidationChange(event)
  setFormState(inputData)
}
console.log(formState)
//HandleSubmit Function
// const handlesubmit = (event) => {
// event.preventDefault()
// }
//Form Validation Using YUP
let schema = yup.object().shape({
  firstName: yup.string().required("Cannot be Blank"),
  lastName: yup.string().required("Cannot be Blank"),
  userName: yup.string().email("Cannot be Blank").required(),
  password: yup.string().required(),
  email: yup.string().email("Cannot be Blank").required(),
  zipCode: yup.string().required("Cannot be Blank"),
  state: yup.string().required("Cannot be Blank"),
  city: yup.string().required("Cannot be Blank")
});
// Handle Validation Function
const handleValidationChange = (event) => {
yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({...errors, [event.target.name]: ""})
      })
      .catch((err) => {
        setErrors({...errors, [event.target.name]: err.errors[0]})
      })
  }
    return(
        <div className='form'>
            <form>
            <h3>Signup Your Account !!!</h3>
            <div className='col'>
            <label>
            <input type="text" placeholder='First Name'
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            >
            </input>
            {errors.firstName.length > 0 ? <p className="errors">{errors.firstName}</p> : null}
            </label>
            <label>
            <input type="text" placeholder='Last Name'
             name="lastName"
             value={formState.lastName}
             onChange={handleChange}
            >
            </input>
            {errors.firstName.length > 0 ? <p className="errors">{errors.lastName}</p> : null}
            </label>
                      </div>
                      <div className='col'>
                        <label>
            <input type="text" placeholder='Username'
             name="userName"
             value={formState.userName}
             onChange={handleChange}
            >
               </input>
               {errors.firstName.length > 0 ? <p className="errors">{errors.userName}</p> : null}
               </label>
               <label>
            <input type="password" placeholder='Password'
             name="password"
             value={formState.password}
             onChange={handleChange}
            >
            </input>
            {errors.firstName.length > 0 ? <p className="errors">{errors.password}</p> : null}
            </label>
           </div>
         <div className='col'>
         <label>
            <input type="email" placeholder='Email'
             name="email"
             value={formState.email}
             onChange={handleChange}
            >
            </input>
            {errors.firstName.length > 0 ? <p className="errors">{errors.email}</p> : null}
            </label>
            <label>
            <input type="number" placeholder='Zip Code'
             name="zipCode"
             value={formState.zipCode}
             onChange={handleChange}
            >
            </input>
            {errors.firstName.length > 0 ? <p className="errors">{errors.zipCode}</p> : null}
            </label>
            </div>
            <div className='col'>
              <label>
            <input type="text" placeholder='State'
             name="state"
             value={formState.state}
             onChange={handleChange}
            >
               </input>
               {errors.firstName.length > 0 ? <p className="errors">{errors.state}</p> : null}
               </label>
               <label>
            <input type="text" placeholder='City'
             name="city"
             value={formState.city}
             onChange={handleChange}
            >
            </input>
            {errors.firstName.length > 0 ? <p className="errors">{errors.city}</p> : null}
            </label>
            </div>
            <button >Sign Up</button>
            <div className='already'>
            <p>Already i Have an Account</p>
            <Link to="SignUp" className='Link' >Sign In</Link>
            </div>
            <div className='col-2'>
    <a href='youtube.com' className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="1.5x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="1.5x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x" />
      </a>
      <a
        href="https://www.github.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
        </div>
            </form>
        </div>
    )
}
export default SignUp;
1:29
---------------------------------------
1:30
CONTACT_US COMPONENT
1:30
import React from 'react'
import "../ContactUs/contact_us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
faGithub
} from "@fortawesome/free-brands-svg-icons";
import '../ContactUs/contact_us.css';
const ContactUs = () => {
    return(
      <div className='main-Contact'>
  <div className='contact'>
  <h2>Contact Us</h2>
<p>
  If You Have a Question or Just want to get In Touch Use The Form.
  We Look Forward To Hearing From You.
</p>
       <div >
         <ul>
      <li><FontAwesomeIcon icon={faPhone} size='2em' color='black' />   +1(614)446-8873 / +252 634363767
      </li>
       <li><FontAwesomeIcon icon={faEnvelope} size='2em' color='black' />   info@Fix.com
       </li>
       </ul>
         </div>
<a href='youtube.com' className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="1.5x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="1.5x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x" />
      </a>
      <a
        href="https://www.github.com"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
  </div>
  <div className='contact-form'>
<h2>Get In Touch</h2>
<input type="text" placeholder='Your Name'></input>
<input type="text" placeholder='Your Email'></input>
<input type="text" placeholder='Your Message' className='message'></input>
<button>Send</button>
  </div>
        </div>
    )
}
export default ContactUs;
1:30
---------------------------------------
1:31
STYLE.CSS
1:31
form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
  }
  .terms {
    display: inline-block;
    align-self: self-start;
  }
  input {
    width: 260px;
    height: 35px;
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0);
    border-color: #322081;
    font-weight: bold;
    outline: none;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 10px;
    margin-right: 13px;
  }
  input:focus {
    outline: none;
    border-color: red ;
  }
  .errors {
    color: red;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
  }
  .already{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
.form{
    width: 50%;
    margin-left:25% ;
    -webkit-box-shadow: 0 15px 30px rgba(5, 5, 5, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-radius: 13px;
    border-style:outset;
    margin-bottom: 30px;
  }
  .form .col{
    display: flex;
    flex-wrap: nowrap;
  }
  button {
     text-decoration: none;
    position: relative;
    float: right;
    width: 450px;
    height: 45px;
    border-radius: 5px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 10px;
    background-color: #322081;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 30px;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  .already{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 10px;
  }
  .already .Link{
    text-decoration: none;
    font-weight: bold;
    margin-top: 14px;
  }
  .already p{
    font-size: 15px;
    margin-right: 8px;
  }
  .signIn{
      background-color: #fff;
      color: #0E0D0D;
  }
  .contact{
    display: flex;
  }
  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12),
      0 2px 3px 2px rgba(0, 0, 0, 0.24);
    background: #D3FF3A;
    color: #0E0D0D;
  }
  .terms {
    display: inline-block;
    align-self: self-start;
  }
  .terms input {
    width: 20px;
    display: inline-block;
    margin-right: 5px;
    margin-top:-10px ;
  }
  textarea{
    width: 40%;
    height: 30px;
  }
/* Social-Media */
  a.social {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
  }
  a.social:hover {
    transform: translateY(-2px);
  }
  a.youtube {
    color: #EB3223;
  }
  a.facebook {
    color: #4968AD;
  }
  a.twitter {
    color: #49A1EB;
  }
  a.instagram {
    color: black;
  }
  /* FOOTER */
.main-Footer{
background-color: #fff;
border-top: 1px solid #322081;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.col p{
    color: #322081;
    font-size: 15px;
}
.col-2{
    margin-top: 13px;
}
/* RESPONSIVE */
  @media(max-width: 813px){
    .form{
        width: 250px;
        margin-left: 10%;
      }
      form .col{
display: flex;
flex-direction: column;
      }
      .form input{
        width: 150px;
      }
      button{
        width: 200px;
      }
  }
  @media(max-width: 570px){
      .form{
        width: 300px;
    margin-right: 10px;
      }
      input{
    width: 200px;
      }
      button{
        width: 180px;
      }
      .row{
        display: inline;
    }
  }
  i {
    font-size: 12px;
  }
1:31
---------------------------------------
1:31
CONTACT_US.CSS
1:32
.main-Contact{
    display: flex;
    margin: 0 200px;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
}
.contact{
    display: inline;
    background-color: #322081;
    width: 350px;
    height: 470px;
    color: #fff;
 align-items: flex-start;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.contact-form{
background-color: #fff;
width: 480px;
}
ul{
    list-style-type:none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
li{
display:inline;
justify-content: space-around;
font-size: 18px;
}
.contact-form button{
    width: 80px;
}
.contact a{
    margin-top: 50px;
}
.message{
    height: 100px;
}
.contact-form input{
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0);
    border-radius: 0;
    align-items: flex-start;
    border-color: #322081;
    width: 450px;
}
.contact-form input:focus{
border-color: red;
}
::-webkit-input-placeholder{
    color: #322081;
   text-align:justify;
}
.contact-form h2{
    color:#322081 ;
}
/* Responsive */
@media(max-width: 570px){
.main-Contact{
    margin: 10px;
}
.contact-form input{
    width: 200px;
}
.contact{
    width: 250px;
}
.contact-form{
    width: 180px;
}
.contact a{
    margin-top: 20px;
    display: inline;
}
}
