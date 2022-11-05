/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react'
// import axios from 'axios'
// import { BrowserRouter as Router , Route, Link, Routes, useNavigate, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStickerMule } from "@fortawesome/free-brands-svg-icons"
import { faSignal, faArrowPointer, faShieldHalved, faCube, faList, faArrowsSpin, faRectangleXmark } from "@fortawesome/free-solid-svg-icons"


function header() {
  const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <header>
			<FontAwesomeIcon className='icon-header' icon={faStickerMule}></FontAwesomeIcon>
			<nav ref={navRef}>
        <div className='dropdown'>
          <p>Home</p>
          <div className="dropdown-content">
            <div className='h1'>
            <FontAwesomeIcon className='icon-drop' icon={faSignal}></FontAwesomeIcon>
              Analytics
            </div>
                <p>Get a better understanding of where your traffic is coming from.</p>
            <div className='h1'>
              <FontAwesomeIcon className='icon-drop' icon={faArrowPointer}></FontAwesomeIcon>
              Engagement
            </div>
                <p>Speak directiy to your customers in a more meaningful way.</p>
            <div className='h1'>
            <FontAwesomeIcon className='icon-drop' icon={faShieldHalved}></FontAwesomeIcon>
              Security
            </div>
                <p>Your customers' data will be safe and secure.</p>
            <div className='h1'>
            <FontAwesomeIcon className='icon-drop' icon={faCube}></FontAwesomeIcon>
              Integrations
            </div>
                <p>Connect with third-party tools that you're already using.</p>
            <div className='h1'>
              <FontAwesomeIcon className='icon-drop' icon={faArrowsSpin}></FontAwesomeIcon>
              Automations
            </div>
                <p>Build strategic funnels that will drive your customers to convert.</p>
          </div> 
        </div>
				<a href="/#">Pricing</a>
				<a href="/#">Docs</a>
				<a href="/#">More</a>
				<hr className='line-header'></hr>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
           <FontAwesomeIcon className='icon-respon' icon={faRectangleXmark}></FontAwesomeIcon>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
      <FontAwesomeIcon className='icon-respon' icon={faList}></FontAwesomeIcon>
			</button>
		</header>
    )
}
  
  export default header;