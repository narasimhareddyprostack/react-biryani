import React from 'react'
import { gmAction, gnAction } from '../redux/message/message.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {

    let dispatch = useDispatch()

    let message = useSelector((state) => {
        return state
    })
    let gmHandler = () => {
        console.log("check point - view")
        //dispatch an action
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <h2>Message Component</h2>
            <pre>{JSON.stringify(message)}</pre>
            <h3>Message:{message.msg} </h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message