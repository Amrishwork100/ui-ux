import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {

    state = {
        product: [
            { id: 1, productName: "iPhone", price: "89000", quantity: 0 },
            { id: 2, productName: "Sony Camera", price: "89000", quantity: 0 },
            { id: 3, productName: "Samsung LED Tv", price: "89000", quantity: 0 },
            { id: 4, productName: "Lenovo Tv", price: "89000", quantity: 0 },
            { id: 5, productName: "Xbox", price: "89000", quantity: 0 },
            { id: 6, productName: "Dell Montior", price: "89000", quantity: 0 }
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.product.map((prod) => {
                        return <Product key={prod.id} product={prod}>
                        </Product>;
                    })}
                </div>
            </div>
        )
    }
}