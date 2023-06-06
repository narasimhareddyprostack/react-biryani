import React from 'react'

const Login = () => {
    let btnRef = React.useRef()
    return (
        <div>
            <h3>Login Form</h3>
            <form>
                User Name: <input type="text" /> <br /><br />
                Password : <input type="text" /> <br /><br />
                <input type="checkbox" onChange={(event) => {
                    btnRef.current.disabled = !event.target.checked
                }} /> Pls Accept  Terms & conditions
                <br />
                <input ref={btnRef} type="submit" value="Login" disabled />
            </form>
        </div>
    )
}

export default Login