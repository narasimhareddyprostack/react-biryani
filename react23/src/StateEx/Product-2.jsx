import React, { Component } from 'react'
class Product extends Component {
    state = {
        product_Name: "Canon G3012 Multi-function WiFi Color Inkjet Printer ",
        price: 9000,
        image: "",
        qty: 1
    }
    incrHandler = () => {
        this.setState({
            qty: this.state.qty + 1
        })
        //alert("GM")
    }
    decrHandler = () => {
        //alert("GN")
        this.setState({
            qty: this.state.qty - 1
        })
    }
    render() {
        return (
            <div className='container'>
                <h2>Product Example</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-8">
                        <table className='table'>
                            <thead>
                                <th>Name</th>
                                <th>Price</th>
                                <th>QTY </th>
                                <th>Total </th>
                                <th>Info</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td>{this.state.price}</td>
                                    <td> <button onClick={this.decrHandler}>- </button> {this.state.qty}  <button onClick={this.incrHandler}>+</button> </td>
                                    <td>{this.state.price * this.state.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product