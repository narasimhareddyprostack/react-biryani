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

    /*   product ={
          name:"Iphone 12",
          price:55000,
          qty:1 ,
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYy6cah1w9RRDO5LBAXruj0_AZWxvd_eP2w&usqp=CAU'
      } */
    render() {
        return (
            <div>
                <h1>Product Component</h1>
            </div>
        )
    }
}

export default Product