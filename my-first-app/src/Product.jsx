import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  state = { prod: this.props.product };
  render() {
    return (
      <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <div className="text-muted">{this.props.product.id}</div>
            <h5 className=" pt-2 border-top ">
              {this.props.product.productName}
            </h5>
            <div>&#x20B9;{this.props.product.price}</div>
            <div className="card-footer text-end">
              <Link to="/productDetails" className="text-start mx-2">
                Details
              </Link>
              <button className="btn btn-primary text-end">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
