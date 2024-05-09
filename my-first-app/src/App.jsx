import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./login";
import NoMatchFound from "./NoMatchFound";
import BrowserRouter from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default class App extends Component {

    render() {
        return (
            <Switch>
            <BrowserRouter>
            <NavBar/>
                {/* <Route path="/" exact Component={NavBar}/> */}
                <Route path="/cart" exact Component={ShoppingCart}/>
                <Route path="/login" exact Component={Login}/>
                <Route path="*"  Component={NoMatchFound}/>
            </BrowserRouter>
            </Switch>
            // <React.Fragment>
            //     <NavBar/>
            //     <Login />
            // </React.Fragment>

        )
    }
}