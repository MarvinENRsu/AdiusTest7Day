import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './component/header'
import Footer from './component/footer'


function DataEmployee() {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState([])
  const [editTable, setEditTable] = useState(false)
  const [fristname, setFristname] = useState('')
  const [lasttname, setLastname] = useState('')

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    // !token = null, undefined, '', 0
    if (token) navigate('/login')
    getDataUsers()
  }, [])

  const getDataUsers = async () =>{
    const data = await axios.get('https://reqres.in/api/users')
    console.log('data', data.data.data)
    setDataUser(data.data.data)
    console.log(dataUser)
  }

  const onClickAdduser = async () =>{ 
    setEditTable(true)   
  } 

  const onClickSumit = async () =>{ 
    await axios.post('https://reqres.in/api/users', {
            "name": fristname ,
            "job": lasttname
        }).then((res) => {
          console.log(res)
            if (res) {
              const newData = {
                email: res.data.id,
                first_name: res.data.name,
                last_name: res.data.job
              }
              console.log(newData)
              dataUser.push(newData)

              setEditTable(false)
            }
        })
    

       
  }

  

  

  return (
    <div className="App">
      <Header></Header>
      <button className='button-add' onClick={() => onClickAdduser()}>
        Add Users
      </button>
        <div className="table-section">
          <table>
            <tr>
              <th>Email</th>
              <th>Fist Name</th>
              <th>Last Name</th>
            </tr>
            {editTable && (
              <tr className={editTable}>
                <td>
                  {/* <input 
                    className='input-box' 
                    type="text" 
                    name="password" 
                    placeholder="Email.."
                    onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                    }}
                  /> */}
                </td>
                <td><input 
                    className='input-box' 
                    type="text" 
                    name="fristname" 
                    placeholder="Frist Name.."
                    onChange={(e) => {
                        console.log(e.target.value)
                        setFristname(e.target.value)
                    }}
                  /></td>
                <td><input 
                    className='input-box' 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name.."
                    onChange={(e) => {
                        console.log(e.target.value)
                        setLastname(e.target.value)
                    }}
                  /></td>
                  <button className='button-submit' onClick={() => onClickSumit()}>Accep</button>
              </tr>
            )}
            {dataUser.map((val, key) => {
            return (
              <tr key={key}>
                {/* <td>{val.id}</td> */}
                <td>
                  <div>
                  <img src={val.avatar} alt=""/>
                  {val.email}
                  </div>
                </td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
              </tr>
            )
          })}
          </table>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default DataEmployee;
