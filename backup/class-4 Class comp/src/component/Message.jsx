import React from 'react'

class Message extends React.Component {
    constructor(props) {
        super(props)
        console.log("First const")
    }

    edetails = { "sal": 45000, status: "single" }
    render() {
        console.log("second render method")
        return <div>
            <pre>{JSON.stringify(this.edetails)}</pre>
            <hr />
            <button>Test</button>
        </div>
    }
}

export default Message