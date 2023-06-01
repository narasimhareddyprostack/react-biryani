import React, { Component } from 'react'
import User from './Users/User'
class App extends Component {
    render() {
        return (
            <div>
                <h1>App component</h1>
                <hr />
                <User />
            </div>
        )
    }
}

export default App