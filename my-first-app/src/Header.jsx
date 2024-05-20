import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { search: "" }

    }
    render() {
        return (
            <header>
                <div className="navbar-header">

                    <div className="navbar-logo">
                        <div className="logo"></div>
                    </div>

                    <div className="navbar-address">
                        <p className="first-address">Deliver to Kolkata</p>
                        <div className="navbar-main-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="second-address">Update Location</p>
                        </div>
                    </div>
                    <div className="navbar-search">
                        <div className="navbar-select">
                            <select className="search-option">
                                <option >All</option>
                            </select>

                        </div>
                        <div className="search-box">
                            <input type="text" className="input-text" placeholder="Search in Amazon" value={this.state.search}
                                onChange={(event) => {
                                    this.setState({ search: event.target.value })
                                    console.log(this.state.search)
                                }} />

                        </div>
                        <div className="navbar-search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </header>

        );
    }

}

// <div className="navbar-container">

//                     <div className="navbar-logo">
//                         <p className="navbar-company-name" >iTech</p>
//                     </div>
//                     <div className="navbar-home">
//                         <Link to="/" className="home">Home</Link>
//                     </div>
//                     <div className="navbar-customers">
//                         <Link to="/customers" className="customers">Customers</Link>
//                     </div>
//                     {/* <div className="navbar-shopping">
//                     <Link to="/cart" className="shopping">Shopping</Link>
//                 </div> */}
//                 <div className="navbar-support">
//                 <Link to="/support" className="support">Support</Link>
//             </div>
//             <div className="navbar-search">
//                 <select className="navbar-select">
//                     <option>All</option>
//                 </select>

//                 <input type="text" className="search-input" placeholder="Search" value={this.state.search}
//                     onChange={(event) => {
//                         this.setState({ search: event.target.value })
//                         console.log(this.state.search)
//                     }} />
//                 <div className="search-icon">
//                     <i className="fa-solid fa-magnifying-glass"></i>
//                 </div>
//             </div>
//             <div className="navbar-signIn">
//                 <Link to="/signIn" className="signIn-link" >Hello,sign in</Link>
//                 <select name="" id="">
//                     <option value="">Accout & Lists</option>
//                 </select>
//             </div>
//         </div>


export default Header;