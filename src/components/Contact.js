import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";




function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in"
         data-aos-duration="1000">
          <a href='https://www.linkedin.com/in/neha-keshri-6174101bb/' className="items">
            <CiLinkedin className='icons'/>
          </a>
          <a href='https://github.com/NehaKeshri602' className="items">
            <FaGithubSquare className='icons'/>
          </a>
          <a href='mailto:dkkeshrirng@gmail.com' className="items">
            <BiLogoGmail className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
