import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}

export default App