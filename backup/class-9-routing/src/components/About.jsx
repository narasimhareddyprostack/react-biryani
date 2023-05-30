import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor")
    }
    componentWillUnmount() {
        console.log("Finally : unMounting")
    }
    componentDidMount() {
        console.log("Third -after render method")
    }


    render() {
        console.log("Second -render")
        return (
            <div>
                <h2>About Page</h2>
            </div>
        )
    }
}

export default About