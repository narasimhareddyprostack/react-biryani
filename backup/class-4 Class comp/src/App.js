import React, { Component } from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Message from './component/Message'
class App extends Component {
    render() {
        return (
            <div>
                <h1>App Component</h1>
                <hr />
                <Message />
                {/*   <Header />
                <Body /> */}
            </div>
        )
    }
}

export default App