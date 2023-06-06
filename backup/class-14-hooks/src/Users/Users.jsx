import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const Users = () => {
    let [user, setUser] = useState({})
    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
            .then((resp) => {
                setUser(resp.data)
            })
            .catch((err) => { })

        return () => {
            console.log("unmounting")
        }
    }, [])
    return (
        <div className='container'>
            <h2>User Component</h2>
            <pre>{JSON.stringify(user.users)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(user).length > 0 ? <>
                                    {
                                        user.users.map((user) => {
                                            return <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    }
                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users