/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Route, Link, Routes, useNavigate, redirect } from "react-router-dom";


function login() {
  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //   console.log('start')

    //   return () => {
    //     console.log('destroy')
    //   }
    // }, [])

    useEffect(() => {
      console.log('typing')
      const token = sessionStorage.getItem('token')
        if (token) navigate('/')
    }, [])

    const onClickLogin = async () => { 
      toast()
        // await axios.post('https://reqres.in/api/login', {
        //     "email": email,
        //     "password": password
        // }).then((res) => {
        //   console.log(res)
        //     if (res.data.token) {
        //       sessionStorage.setItem('token', res.data.token)
        //       console.log('if')
        //       navigate('/')
        //     }
        // })
    }

    const toast = () =>{
    
    }

    return (
        <div className="App">
          {/* <div className="toast"> */}
            {/* <div className="toast-box">icon</div> */}
            {/* <div className="desc">A notification message..</div> */}
          {/* </div> */}
          <div className="login-section">
            <div className="login-box">
              <div className='mb-1'> 
                Login
              </div>
              <div className='mb-1' >
                <div for="fname">
                  Email
                </div>
                <input 
                  className='input-box' 
                  type="text" 
                  id="fname" 
                  name="firstname" 
                  placeholder="Your Email.."
                  onChange={(e) => {
                      console.log(e.target.value)
                      setEmail(e.target.value)
                  }}
                />
              </div>
              <div className='mb-1' >
                <div for="fname">
                  Password
                </div>
                <input 
                  className='input-box' 
                  type="password" 
                  id="fpassword" 
                  name="password" 
                  placeholder="Your Password.."
                  onChange={(e) => {
                      console.log(e.target.value)
                      setPassword(e.target.value)
                  }}
                />
              </div>
              <div className='mb-1' >
                <button className='login-btn' onClick={() => onClickLogin()}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  export default login;