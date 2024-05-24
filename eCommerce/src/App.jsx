import React, { Component } from "react";
// import NavBar from "./NavBar";
import Header from "./Header"
import ShoppingCart from "./ShoppingCart";
import Login from "./login";
import NoMatchFound from "./NoMatchFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Route,Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Home from "./Home";
import Support from "./Support";
import CustomerList from "./CustomerList";
import Footer from "./Footer";
import MainContent from "./MainContent";
import DefaultPage from "./DefaultPage";


export default class App extends Component {

    render() {
        return (
            // <Switch>
            <BrowserRouter>
                <Header />
                {/* <MainContent/> */}
                <Routes>
                    {/* <Route path="/" exact Component={NavBar}/> */}
                    <Route path="/" exact Component={MainContent} />
                    <Route path="/pro1" exact Component={DefaultPage} />
                    <Route path="/customers" exact Component={CustomerList} />
                    <Route path="/cart" exact Component={ShoppingCart} />
                    <Route path="/support" exact Component={Support} />
                    <Route path="/login" exact Component={Login} />
                    <Route path="*" Component={NoMatchFound} />
                </Routes>
                <Footer/>
            </BrowserRouter>
            // </Switch>
            // <React.Fragment>
            //     <NavBar/>
            //     <Login />
            // </React.Fragment>

        )
    }
}