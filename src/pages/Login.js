
import React from 'react'
import "../pages/style.css";
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