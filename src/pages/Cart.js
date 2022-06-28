import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import "../styles.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

// handling through react-redux
import { connect } from "react-redux";
import React from "react";

import { mobile } from "../responsive";

function Cart({ cart }) {
  // for calculating the total amount of items to be bought
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [shippingPrice, setShippingPrice] = React.useState(0);
  const [finalPrice, setFinalPrice] = React.useState(0);
  const [shippingDiscount, setShippingDiscount] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);
  React.useEffect(() => {
    let price = 0;
    let items = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
      items += item.qty;
    });
    setTotalPrice(price);
    setShippingPrice(price === 0 ? 0 : 590);
    setFinalPrice(
      price === 0
        ? 0
        : price < 9000
        ? price + 590
        : price > 9000
        ? price
        : price
    );
    setShippingDiscount(
      price === 0 ? 0 : price < 9000 ? 0 : price > 9000 ? -590 : price
    );
    setTotalItems(items);
  }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);

  return (
    <Container>
      <h1>
        <Announcements />
        <Navbar />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <Link className="text-link" to="/ProductList">
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag({totalItems})</TopText>
              <TopText>Wishlist(0)</TopText>
            </TopTexts>
            <Link className="text-link" to="/thankyou">
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Link>
          </Top>
          <Bottom>
            <CartContainer>
              {cart.map((item) => (
                <CartItem key={item.id} itemData={item} />
              ))}
            </CartContainer>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>¥{totalPrice}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>¥{shippingPrice}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>¥{shippingDiscount}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>¥{finalPrice}</SummaryItemPrice>
              </SummaryItem>
              <Link className="text-link" to="/thankyou">
                <Button>CHECK OUT</Button>
              </Link>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </h1>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Cart);

const Container = styled.div`
  font-size: 0.7rem;
`;

const Wrapper = styled.div`
  padding: 20px;
  font-weight: 200;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  ${mobile({
    flexDirection: "column"
  })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transperant"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({
    margin: "5px 0"
  })}
`;

const TopTexts = styled.div`
  ${mobile({
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;

  ${mobile({
    margin: "0.2em 0",
    fontSize: "1rem"
  })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    backgroundColor: "white",
    flexDirection: "column"
  })}
`;

const CartContainer = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;

  ${mobile({
    textAlign: "center"
  })}
`;

const SummaryItem = styled.div`
  margin: 2.5em 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "2rem"};

  ${mobile({
    margin: "1em 0"
  })}
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 1em;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;
