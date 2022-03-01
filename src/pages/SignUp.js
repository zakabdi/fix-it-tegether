import React, {useState} from 'react'
import "../pages/style.css";
// import axios from 'axios';
import * as yup from 'yup';
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
            <Link to="/Login" className='Link' >Sign In</Link>
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