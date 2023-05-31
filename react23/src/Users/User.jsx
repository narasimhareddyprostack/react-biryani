import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                this.setState({ users: response.data })
            })
            .catch(() => { })
    }
    render() {
        return (
            <div>
                <h1>User component</h1>
                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        )
    }
}

export default User