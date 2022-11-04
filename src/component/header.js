/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Route, Link, Routes, useNavigate, redirect } from "react-router-dom";


function header() {
  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
				<hr className='line-header'></hr>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
                    Header
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				Close
			</button>
		</header>
    )
}
  
  export default header;