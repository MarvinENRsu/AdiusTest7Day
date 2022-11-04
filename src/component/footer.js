/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Route, Link, Routes, useNavigate, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble,
  faFacebook,
  faStickerMule
} from "@fortawesome/free-brands-svg-icons"

function footer() {
  return (
    <div className='section'>
      <div className='row'>
        <div className='column-2'>
        <FontAwesomeIcon className='icon-logo' icon={faStickerMule}></FontAwesomeIcon>
          <p>Making the world a better place through </p>
          <p>constructing elegant hierarchies.</p>
          <FontAwesomeIcon className='icon-s' icon={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon className='icon-s' icon={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon className='icon-s' icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className='icon-s' icon={faGithub}></FontAwesomeIcon>
          <FontAwesomeIcon className='icon-s' icon={faDribbble}></FontAwesomeIcon>
        </div>
        <div className='column'>
          <h1>Solutions</h1>
          <p>Marketing</p>
          <p>Analytics</p>
          <p>Commeerce</p>
          <p>Insights</p>
        </div>
        <div className='column'>
          <h1>Support</h1>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Guides</p>
          <p>API Status</p>
        </div>
        <div className='column'>
          <h1>Company</h1>
          <p>About</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Partners</p>
        </div>
        <div className='column'>
          <h1>Legal</h1>
          <p>Claim</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
      
      <div className='row'>
            <p>©2020 work, Inc. All rights reserved.</p>
          </div>   
    </div>
  )
}
  
  export default footer;