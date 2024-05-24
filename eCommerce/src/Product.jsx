import React, { Component } from "react";

export default class Product extends Component {

    state = { prod: this.props.product }
    render() {
        return (
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <div className="text-muted">{this.props.product.id}</div>
                        <h5 className=" pt-2 border-top">{this.props.product.productName}</h5>
                        <div>${this.props.product.price}</div>
                        <div className="card-footer text-right">
                            <button className="btn btn-primary align-right" >Buy Now</button>
                        </div>
                        {/* <div style="display: flex; justify-content: flex-end">
                            <button>Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }

}