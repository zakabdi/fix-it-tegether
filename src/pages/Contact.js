import React from 'react'
import "../pages/contactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
faGithub
} from "@fortawesome/free-brands-svg-icons";
// import '../ContactUs/contact_us.css';
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