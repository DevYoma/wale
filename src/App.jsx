import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useEffect, useState } from 'react';

function App() {

  const [todo, setTodo] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setTodo(json));
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* root element is the sign up. */}
          <Route path='/' element={<SignUp todo={todo}/>}/>

          <Route path='/login' element={<Login />}/>

          <Route path='/home' element={<Home />}/>

          <Route path='/dashboard' element={<Dashboard />}/>

          <Route path='*' element={<h1>Error</h1> }/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
