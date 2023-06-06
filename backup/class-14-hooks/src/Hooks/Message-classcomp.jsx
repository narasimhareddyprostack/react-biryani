import React, { Component } from 'react'

export class Message extends Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "GM" })
    }
    gnHandler = () => {
        this.setState({ msg: "GN" })
    }
    render() {
        return (
            <div>
                <h2>Message Component</h2>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>

            </div>
        )
    }
}

export default Message