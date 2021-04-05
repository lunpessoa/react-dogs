import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import Login from './Components/Login/Login.js'
import { UserStorage } from './UserContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
