import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
    return (
        <div>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="#" className='navbar-brand'>React Routing</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'>  <Link className='nav-link' to="/home">Home</Link></li>
                            <li className='nav-list'>  <Link className='nav-link' to="/about">About</Link></li>
                            <li className='nav-list'>  <Link className='nav-link' to="/contact">contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App