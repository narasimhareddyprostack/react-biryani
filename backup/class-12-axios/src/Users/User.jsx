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
    /*  getData = () => {
         Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response) => {
                 console.log(response)
                 this.setState({ users: response.data })
             })
             .catch(() => { })
     } */
    render() {
        return (
            <div className='container'>
                <h1>User component</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                {/* <button onClick={this.getData}>Click</button> */}
                <div className="row">
                    <div className="col-md-8">
                        <table className='table'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length > 0 ?
                                        <>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                })
                                            }

                                        </> : <h1>No Data</h1>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}

export default User