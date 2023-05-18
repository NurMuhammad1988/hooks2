import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbarr  from './Components/Navbarr';
import Counter from './Components/Counter';
import Window from './Components/Window';
import Hook from './Components/Hook';
import Hook2 from './Components/Hook2';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <Router>

      <Navbarr />

      <Routes>
        <Route path='/' />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/Window' element={<Window />} />
        <Route path='/Hook' element={<Hook />} />
        <Route path='/Hook2' element={<Hook2 />} />
      </Routes>

    </Router>

  );
}

export default App;


