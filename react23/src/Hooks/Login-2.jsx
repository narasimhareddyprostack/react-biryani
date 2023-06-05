import React, { useRef, useState } from 'react'

const Login = () => {
    //let [status, setStatus] = useState(true)
    let btnRef = useRef('')

    return (
        <div>
            <h2>Login Component</h2>

            <form>
                Email Id::: <input type="text" /> <br /> <br />
                Password:<input type="text" /> <br></br>
                <input type="checkbox" onChange={(event) => {
                    btnRef.current.disabled = !event.target.checked
                }} /> Please accept  Terms & Conditions
                <br /><br />
                <input type="submit" ref={btnRef} value="Login" disabled />
            </form>
        </div>
    )
}

export default Login