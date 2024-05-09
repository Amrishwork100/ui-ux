import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./login";
import NoMatchFound from "./NoMatchFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Route,Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Support from "./Support";
import CustomerList from "./CustomerList";


export default class App extends Component {

    render() {
        return (
            // <Switch>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* <Route path="/" exact Component={NavBar}/> */}
                    <Route path="/cart" exact Component={ShoppingCart} />
                    <Route path="/login" exact Component={Login} />
                    <Route path="/home" exact Component={Home} />
                    <Route path="/customers" exact Component={CustomerList} />
                    <Route path="/support" exact Component={Support} />
                    <Route path="*" Component={NoMatchFound} />
                </Routes>
            </BrowserRouter>
            // </Switch>
            // <React.Fragment>
            //     <NavBar/>
            //     <Login />
            // </React.Fragment>

        )
    }
}