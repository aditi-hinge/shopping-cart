import styled from "styled-components";
import Navbar from "../components/Navbar";
import MemberAdvert from "../components/MemberAdvert";
import Filter from "../components/Filter";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles.css";

const Container = styled.div``;

export default function ProductList() {
  return (
    <Container>
      <h1>
        <Announcements />
        <Navbar />
        <MemberAdvert />
        <Filter />
        <Products />
        <Newsletter />
        <Footer />
      </h1>
    </Container>
  );
}
