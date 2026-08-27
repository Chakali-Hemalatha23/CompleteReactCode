import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <h1 className="title"> Welcome to routing </h1>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </div>
  );
}
