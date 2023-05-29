import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
//import Product from './Product/Product'
import Message from './eventBindingEx/Message'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Message />
      </div>
    )
  }
}

export default App