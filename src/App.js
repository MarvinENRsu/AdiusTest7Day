import logo from './logo.svg';
import './App.scss';
import './styles/index.scss'
import { BrowserRouter as Router , Route, Link, Routes, useNavigate } from "react-router-dom";
import Login from './login';
import DataEmployee from './dataEmployee';

function App() {
  return (
    
      <div>
      
      <Routes >
        <Route path="/" element={<DataEmployee />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/data" element={<DataEmployee />} /> */}
      </Routes>
      </div>
   
  );
}

export default App;
