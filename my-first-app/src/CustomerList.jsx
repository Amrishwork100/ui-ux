import { render } from "@testing-library/react"
import React, { Component } from "react"

export default class CustomerList extends Component {

    state = {
        pageTitle: "Customers",
        customerCount: 5,
        customers: [
            { id: 1, name: "Rohit", phone: "123-877", address: { city: "New Delhi" }, photo: "https://picsum.photos/id/1010/60" },
            { id: 2, name: "Akash", phone: "546-870", address: { city: "London" }, photo: "https://picsum.photos/id/1011/60" },
            { id: 3, name: "Bablu", phone: "897-324", address: { city: "Mumbai" }, photo: "https://picsum.photos/id/1012/60" },
            { id: 4, name: "Sushant", phone: null, address: { city: "Bangalore" }, photo: "https://picsum.photos/id/1013/60" },
            { id: 5, name: "Vinit", phone: null, address: { city: "Pune" }, photo: "https://picsum.photos/id/1014/60" }
        ],
    };
    render() {
        return (
            <div>
                <h4 className="m-1 p-1">{this.state.pageTitle}
                    <span className="badge text-bg-success mx-2">{this.state.customerCount}</span>
                    <button className="btn btn-danger" onClick={this.onRefreshClick}>Refresh</button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>{this.getCustomerRow()}</tbody>
                </table>
            </div>
        )
    }

    onRefreshClick = () => {
        this.setState({ customerCount: 7 })
    }

    getPhoneNumber = (cust) => {
        if (cust.phone) {
            return cust.phone
        } else {
            return <div className="text text-danger"> No Phone</div>
        }
    }

    getCustomerRow = () => {
        return this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td> <img src={cust.photo} alt="Customer" />
                    <div>
                        <button className=" btn btn-sm btn-secondary" onClick={() => { this.onChangePictureClick(cust, index); }}>Change Picture</button>
                    </div>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneNumber(cust)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        });
    }

    onChangePictureClick = (cust, index) => {

        var custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/104/60";
        this.setState({ customers: custArr });
    }
}