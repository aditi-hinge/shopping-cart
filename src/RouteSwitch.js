import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Thankyou from "./pages/Thankyou";
import React from "react";

import { connect } from "react-redux";

function RouteSwitch({ current }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<App />} />
        <Route path="/productlist" element={<ProductList />} />
        {current && (
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem
  };
};

export default connect(mapStateToProps)(RouteSwitch);
