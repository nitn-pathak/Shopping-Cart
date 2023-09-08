import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import Home from './Components/Home';
// import Cartpage from './Components/Cartpage';
import { Route,Routes } from 'react-router-dom';
import Cartpage from './Components/Cartpage';
import Cart2 from './Components/Cart2';
import Card from './Components/Card';


function App() {
  return (
    <div className="App overflow-x-hidden  ">
    
    

  <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cartpage/>} />
   

  </Routes>
       

    
    </div>
  );
}

export default App;
