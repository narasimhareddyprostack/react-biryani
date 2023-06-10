import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../redux/user/user.action'
const User = () => {
    let dispatch = useDispatch()
    let user = useSelector((state) => {
        return state
    })
    React.useEffect(() => {
        //dispatch an redux action 
        dispatch(userAction())
    }, [])
    return (
        <div>
            <h2>User Component</h2>
            <pre>{JSON.stringify(user)}</pre>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(user).length > 0 ? <>
                            {
                                user.users.map((user) => {
                                    return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                })
                            }
                        </> : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User