import React from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Message from './Message/Message'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h2>App component</h2>
                <Message />
            </Provider>

        </div>
    )
}

export default App