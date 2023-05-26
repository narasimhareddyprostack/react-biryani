import React from 'react'

class Message extends React.Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({
            msg: "GM"
        })
    }
    gnHandler = () => {
        this.setState({ msg: "GN" })
    }
    render() {
        console.log("render method")
        return <div>
            <h2>Message:{this.state.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message