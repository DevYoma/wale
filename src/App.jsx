import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Register from './Components/RegisterForm/Register';
import About from './Pages/About'
import Login from './Components/LoginForm/Login';
import Calculator from './Pages/Calculator/Calculator';

function App() {  
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About/>} />
        <Route path='/calculator' element={<Calculator/>} />
      </Routes>
    </div>
  );
}

export default App;

  