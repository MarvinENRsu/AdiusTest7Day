import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './component/header'


function DataEmployee() {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState([])

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (!token) navigate('/login')
    getDataUsers()
  }, [])

  const getDataUsers = async () =>{
    const data = await axios.get('https://reqres.in/api/users')
    console.log('data', data.data.data)
    setDataUser(data.data.data)
    console.log(dataUser)
  }

  

  return (
    <div className="App">
      <Header></Header>
        <div className="table-section">
          <table>
            <tr>
              {/* <th>Number</th> */}
              <th>Email</th>
              <th>Fist Name</th>
              <th>Last Name</th>
            </tr>
            {dataUser.map((val, key) => {
            return (
              <tr key={key}>
                {/* <td>{val.id}</td> */}
                <td>
                  <img src={val.avatar} alt=""/>
                  {val.email}
                </td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
              </tr>
            )
          })}
          </table>
        </div>
        <div className='footer-box'>
        footer
        </div>
    </div>
  );
}

export default DataEmployee;
