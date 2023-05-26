import React, { Component } from 'react'

class Product extends Component {
    state = {
        product: {
            name: "Iphone 12",
            price: 55000,
            qty: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYy6cah1w9RRDO5LBAXruj0_AZWxvd_eP2w&usqp=CAU'
        }
    }
    decrHandler = () => {
        console.log("Test Case - inside decrHandler ")
        this.setState({
            product: {
                ...this.state.product, qty: this.state.product.qty - 1
            }
        })
    }
    incrHandler = () => {
        this.setState({
            product: {
                ...this.state.product, qty: this.state.product.qty + 1
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <table className='table table-hover '>
                            <thead className='bg-warning text-white'>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>QTY</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={this.state.product.image} alt="" /></td>
                                    <td>{this.state.product.name}</td>
                                    <td>{this.state.product.price}</td>
                                    <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.product.qty}<i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                    <td>{this.state.product.price * this.state.product.qty}</td>
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