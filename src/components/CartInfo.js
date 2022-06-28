import styled from "styled-components";
// handling through react-redux
import { connect } from "react-redux";
import React from "react";
//
function CartInfo({ cart, wishlist }) {
  return (
    <Container>
      <TopText>Shopping Bag({cart.qty})</TopText>
      <TopText>Wishlist(0)</TopText>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    wishlist: state.shop.wishlist
  };
};

export default connect(mapStateToProps)(CartInfo);

const Container = styled.div`
  font-size: 1.7rem;
  padding: 20px;
  font-weight: 900;
`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
`;
