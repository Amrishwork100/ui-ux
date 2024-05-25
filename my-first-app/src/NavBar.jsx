import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-style ">
                    <div className="container-fluid">
                        <h1 className="navbar-brand text-warning" >Apper</h1>

                        {!this.props.isLoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-warning " >login</Link>
                                </li>
                            </ul>
                        ) : ""}


                        {this.props.isLoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">

                                    <Link to="/dashboard" className="nav-link text-warning" >DashBoard</Link>
                                </li>
                            </ul>) : ""}


                        {this.props.isLoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/customers" className="nav-link text-warning " >Customers</Link>
                                </li>
                            </ul>) : ""}

                        {this.props.isLoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link text-warning ">ShoppingCart</Link>
                                </li>
                            </ul>) : ""}


                        {this.props.isLoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/support" className="nav-link text-warning " >support</Link>
                                </li>
                            </ul>) : ""}

                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;