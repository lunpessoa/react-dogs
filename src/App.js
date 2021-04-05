import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import Login from './Components/Login/Login.js'
import { UserStorage } from './UserContext'
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;