import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Login from "./login";
import NoMatchFound from "./NoMatchFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Support from "./Support";
import CustomerList from "./CustomerList";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import ProductDetails from "./ProductDetails"

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  function updateLoginStatus(status) {
    return setIsLoggedIn(status);
  }

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* <Route path="/login" exact element={<Login 
          {(props)=> {updateLoginStatus=this.updateLoginStatus} } />}/> */}
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={isLoggedIn}
              updateLoginStatus={updateLoginStatus}
            />
          }
        />

        <Route path="/dashboard" exact element={<DashBoard />} />
        <Route path="/customers" exact element={<CustomerList />} />
        <Route path="/cart" exact element={<ShoppingCart />} />
        <Route path="/support" exact element={<Support />} />
        <Route path="/productDetails" exact element={<ProductDetails />} />
        <Route path="*" element={<NoMatchFound />} />
      </Routes>
    </Router>
  );
}
export default App;
