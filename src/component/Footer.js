import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import '../pages/style.css';
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
