//import action types 
import { GM, GN } from './message.action'
let initialState = {
    msg: "Hello"
}
let messageReducer = (state = initialState, action) => {
    console.log("check point - reducer")

    switch (action.type) {
        case 'GM':
            return { msg: "Good Morning" }
        case 'GN':
            return { msg: "Good Night" }
        default:
            return state
    }
}

export { messageReducer }