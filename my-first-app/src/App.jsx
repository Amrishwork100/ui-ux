import React, { Component } from "react";
//import Header from "./Header"
import ShoppingCart from "./ShoppingCart";
import Login from "./login";
import NoMatchFound from "./NoMatchFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Route,Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "./Support";
import CustomerList from "./CustomerList";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        return (
            // <Switch>
            <BrowserRouter>
                {/* <Header /> */}
                {/* <MainContent/> */}

                <NavBar isLoggedIn={this.state.isLoggedIn} />
                <Routes>
                    {/* <Route path="/" render={
                        (props) => (
                            <Login {...props}
                                updateLoginStatus={this.state.updateLoginStatus}
                            />)} /> */}
                    <Route path="/" exact Component={Login} />
                    <Route path="/dashboard" exact Component={DashBoard} />
                    <Route path="/customers" exact Component={CustomerList} />
                    <Route path="/cart" exact Component={ShoppingCart} />
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

    updateLoginStatus(status) {
        this.setState(this.isLoggedIn = status);
    }
}