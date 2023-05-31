import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h1>Login Page</h1>
                <hr />
                <form onSubmit={this.submitHandler}>
                    <label >Email Id:</label>
                    <input type="text" name="email" onChange={this.updateHandler} /> <br /><br />
                    <label >Password</label>
                    <input type="text" name="password" onChange={this.updateHandler} /> <br /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login