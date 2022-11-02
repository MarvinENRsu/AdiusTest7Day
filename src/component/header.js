/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Route, Link, Routes, useNavigate, redirect } from "react-router-dom";


function header() {
  const navigate = useNavigate()
    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
                    Header
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{/* <FaBars /> */}Close
			</button>
		</header>
    )
}
  
  export default header;