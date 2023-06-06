import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Users from './Users/Users'
import Message from './Hooks/Message'
import Login from './Hooks/Login'
const App = () => {
    return (
        <div>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link className='navbar-brand' to="#">Axios Ex-2</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><Link className='nav-link' to="/home">Home</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="/user">User</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="/message">Message</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="/useRefEx">useRef Ex</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/user" element={<Users />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/useRefEx" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App