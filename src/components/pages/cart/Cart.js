import React from "react";
import './Cart.css';
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <h1>Cart</h1>
            <Link to="/exchange" className="btn">Exchange</Link>
        </div>
    );
};

export default Cart;