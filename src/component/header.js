/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react'
// import axios from 'axios'
// import { BrowserRouter as Router , Route, Link, Routes, useNavigate, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStickerMule } from "@fortawesome/free-brands-svg-icons"


function header() {
  // const navigate = useNavigate()
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <header>
			<FontAwesomeIcon className='icon-header' icon={faStickerMule}></FontAwesomeIcon>
			<nav ref={navRef}>
        <div className='dropdown'>
          Home
          <div className="dropdown-content">
            <div className='h1'>Analytics</div>
                <p>Get a better understanding of where your traffic is coming from.</p>
            <div className='h1'>Engagement</div>
                <p>Get a better understanding of where your traffic is coming from.</p>
            <div className='h1'>Security</div>
                <p>Get a better understanding of where your traffic is coming from.</p>
            <div className='h1'>Integrations</div>
                <p>Get a better understanding of where your traffic is coming from.</p>
            <div className='h1'>More</div>
                <p>Get a better understanding of where your traffic is coming from.</p>

          </div> 
        </div>
				<a href="/#">Pricing</a>
				<a href="/#">Docs</a>
				<a href="/#">More</a>
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