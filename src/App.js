import "./styles.css";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Vouchers from "./components/Vouchers";

import React from "react";

export default function App() {
  return (
    <div>
      <h1>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
        <Vouchers />
        <Products />
        <Newsletter />
        <Footer />
      </h1>
    </div>
  );
}
