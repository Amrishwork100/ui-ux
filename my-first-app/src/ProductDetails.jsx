import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetails(props) {
  const [data, setData] = useState({
    id:"",
    name:"",
    photo:"",
    productInfo:"",
    feature:"",
    description:""
    

  });

  useEffect(() => {
    axios
      .get("http://localhost:xxxx/product/api/product-details/"+`${props.id}`)
      .then(function (response) {
        console.log(response);    
        data = response;
        setData(data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <div className="">
      <h3 className="text-center bg-primary">product details ...</h3>
      <div className="product-name"></div>
      <div className="product-slider"></div>
      <div className="product-size"></div>
      <div className="addToCart"></div>
      <div className="product-features"></div>
      <div className="product-description"></div>
    </div>
  );
}

export default ProductDetails;
