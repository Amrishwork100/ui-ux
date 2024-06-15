import React, { Component } from "react";
import Product from "./Product";
import cart from "./cart.css";

export default class ShoppingCart extends Component {
  state = {
    product: [
      {
        id: 1,
        productName: "iPhone 15 pro",
        price: "140000",
        quantity: 0,
      },
      {
        id: 2,
        productName: "Sony Camera",
        price: "80000",
        quantity: 0,
      },
      {
        id: 3,
        productName: "Samsung Super Ultra HD TV",
        price: "70000",
        quantity: 0,
      },
      {
        id: 4,
        productName: "Lenovo Ultra HD LED TV",
        price: "82000",
        quantity: 0,
      },
      {
        id: 5,
        productName: "Xbox",
        price: "95000",
        quantity: 0,
      },
      {
        id: 6,
        productName: " New launched Dell Laptop",
        price: "90000",
        quantity: 0,
      },
      {
        id: 7,
        productName: "Lenovo ThinkPad",
        price: "120000",
        quantity: 0,
      },
      {
        id: 8,
        productName: "Dell Montior",
        price: "92000",
        quantity: 0,
      },
      {
        id: 9,
        productName: "Apple Laptop with IOS",
        price: "100000",
        quantity: 0,
      },
      {
        id: 10,
        productName: "Samsung M15 Series",
        price: "50000",
        quantity: 0,
      },
      {
        id: 11,
        productName: "HP EliteBook Intel i5 core",
        price: "40000",
        quantity: 0,
      },
      {
        id: 12,
        productName: "Motorol F55 Fusion",
        price: "30000",
        quantity: 0,
      },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4 className="text-center">Upto 50% Discount Shop Now</h4>

        <div className="row">
          {this.state.product.map((prod) => {
            return <Product key={prod.id} product={prod}></Product>;
          })}
        </div>
      </div>
    );
  }
}
