import React from 'react'
import rImage from '../images/rahul.jpeg'
class Message extends React.Component {
    constructor(props) {
        super(props)
        console.log("First const")
    }
    ename = "Rahul"
    eid = 101;
    eLoc = ["Wayanad", "New Delhi"]
    edetails = { "sal": 45000, status: "single" }
    render() {
        console.log("second render method")
        return <div>
            <h1>Message Component and Employee Details are</h1>
            <h3>Employee Id:{this.eid}</h3>
            <h3>Employee Name:{this.ename}</h3>
            <h4>Employee Loc:{this.eLoc[1]}</h4>
            <h5>Status:{this.edetails.status}</h5>
            <hr />
            <img src={rImage} alt="" />
        </div>
    }
}

export default Message