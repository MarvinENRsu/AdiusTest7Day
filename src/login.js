/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import axios from 'axios'

function login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onClickLogin = async () => {
        const data = await axios.post('https://reqres.in/api/login', {
            "email": email,
            "password": password
        })
            console.log(data)
    }

    return (
        <div className="App">
        <div className="login-section">
          <div className="login-box">
            <div className='mb-1'> 
              Login {email}
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