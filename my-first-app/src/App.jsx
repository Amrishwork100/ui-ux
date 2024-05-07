import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./login";
import "bootstrap/dist/css/bootstrap.min.css"


export default class App extends Component {

    render() {
        return (
            // <BrowserRouter>
            // <Routes>
            //     <Route>

            //     </Route>
            // </Routes>
            // </BrowserRouter>
            <React.Fragment>
                <NavBar/>
                <Login />
            </React.Fragment>

        )
    }
}