import React, { useEffect, useState } from "react";
import PrivateAPI from "../../../api/PrivateApi";
import { NavLink } from "react-router-dom";
import "./productList.css";
import { FaCartPlus } from "react-icons/fa";

export default function Product() {
  const [apiData, setApiData] = useState([]);
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count

  useEffect(() => {
    const getApi = async () => {
      const { data } = await PrivateAPI.get("/products");
      setApiData(data);
    };
    getApi();
  }, []);

  const handleAddToCart = () => {
    // Increment cart count when "Add to Cart" is clicked
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <div className="container">
        <div className="CartView">
          <h4 className="Cart-view-heading">See Items are Added to Cart</h4>
          <a href="/" className="cart-view-button">
            Cart {cartCount} <FaCartPlus style={{ color: "#000000", fontSize: "50px" }} />
          </a>
        </div>
      </div>

      <div className="Product-container">
        <div className="products">
          {apiData?.map((item, i) => (
            <div key={i} className="product-items">
              <img src={item?.image} alt="" />
              <h4>{item?.title}</h4>
              <span>Rs. {item?.price}</span>
              <p>{item?.discription}</p>
              <NavLink to={`/product/${item?.id}`}>Buy Now</NavLink>
              {/* Use onClick event to trigger handleAddToCart */}
              <NavLink onClick={handleAddToCart}>Add to Cart</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
