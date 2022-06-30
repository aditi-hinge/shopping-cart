import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Thankyou from "./pages/Thankyou";
import React from "react";

import { connect } from "react-redux";

// import history from "./helpers/history";
// import { useRouterHistory } from "react-router"

function RouteSwitch({ current }) {
  return (
    <HashRouter>
      <Routes>
        <Route path="shopping-cart/" element={<App />} />
        <Route path="/productlist" element={<ProductList />} />
        {current && (
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </HashRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem
  };
};

export default connect(mapStateToProps)(RouteSwitch);
