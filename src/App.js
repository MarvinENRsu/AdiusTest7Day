import logo from './logo.svg';
import './App.scss';
import './styles/index.scss'
import { BrowserRouter as Router , Route, Link, Routes } from "react-router-dom";
import Login from './login';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    
      <div>
      
      <Routes >
        <Route path="/" element={<Login />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </div>
   
  );
}

export default App;
