import React from "react";
import avatar from "./images/avatar.jpg"
import emailLogo from "./images/Mail.png"
import linkedinLogo from "./images/linkedin.png"

export default function Info() {
  return (
    <header>
      <div className="info--avatar"></div>
      <div className="info--header">
        <h1 className="info--title">Kenneth Matovu</h1>
        <h3 className="info--role">Frontend Developer</h3>
        <a href="https://emkay.netlify.app" className="info--link">learningjournal.site</a>
      </div>
      <div className="info--links_wrapper">
        <a href="mailto:kenneth.mtv.km@gmail.com" className="info--cta">
          <img src={emailLogo} alt="email logo" className="info--cta_logo"/>
          <span>Email</span>
        </a>
        <a href="http://bit.ly/3xA46oC" className="info--cta info--blue_cta">
        <img src={linkedinLogo} alt="email logo" className="info--cta_logo"/>
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  )
}