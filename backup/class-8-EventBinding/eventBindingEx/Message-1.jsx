import React, { Component } from 'react'
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = { msg: "Hello" }
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gaHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    geHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gnHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message