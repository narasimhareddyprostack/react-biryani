import React, { useState } from 'react'
let Message = () => {
    let [msg, setMsg] = useState("Hello")
    let gmHandler = () => {
        setMsg("Good Morning! Rahul Gandhi")
    }
    let gnHandler = () => {
        setMsg("Good Night! Rahul")
    }
    return <div>
        <h1>Message component...</h1>
        <h3>Message Value:{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={() => {
            setMsg("Good Night! Rahul")
        }}>GN</button>
    </div>
}
export default Message