import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href="#" className='navbar-brand'>React Routing</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'>  <a className='nav-link' href="/home">Home</a></li>
                    <li className='nav-list'>  <a className='nav-link' href="/About">About</a></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar