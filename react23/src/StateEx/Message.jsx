import React, { Component } from 'react'

class Message extends Component {
    msg = "Hello....."

    gmHandler = () => {
        console.log("gmHandler exec")
        console.log(this.msg)
        this.msg = "Hello,GM Rahul Gandhi"
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h1>Message Component</h1>
                <h3>Messaage Value:{this.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button>GN</button>
            </div>
        )
    }
}

export default Message