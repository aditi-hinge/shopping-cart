import styled from "styled-components";
import "../styles.css";
import "../components/data";

import { Add, Remove, DeleteOutline } from "@material-ui/icons";

// using redux to delete an item from the cart
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustItemQty
} from "../components/redux/shopping/shopping-actions";
import React from "react";

import { mobile } from "../responsive";

function CartItem({ itemData, removeFromCart, adjustQty }) {
  // increase quantity
  //when plus sign is cliked it should increase the value by 1
  const [quantity, setQuantity] = React.useState(itemData.qty);
  // const [decrementValue, setDecrementValue] = React.useState(itemData.qty);

  function onClickIncrement() {
    setQuantity((prevValue) => prevValue + 1);
    adjustQty(itemData.id, quantity);
  }

  function onClickDecrement() {
    setQuantity((prevValue) => prevValue - 1);
    adjustQty(itemData.id, quantity);
  }

  //if the quantity of items is lowered to 0, it gets removed
  //from the cart
  function zeroItems() {
    if (quantity === 0) {
      removeFromCart(itemData.id);
      return;
    }
  }

  return (
    <Container>
      <Product>
        <ProductDetail>
          <Image src={itemData.img} alt={itemData.name} />
          <Details>
            <ProductName>
              <b>Product: </b>
              {itemData.name}
            </ProductName>
            <ProductId>
              <b>Id: </b>
              {itemData.number}
            </ProductId>
            <ProductColor color={itemData.color} />
            <ProductSize>
              <b>Size: </b>
              {itemData.size}
            </ProductSize>
            <RemoveContainer>
              <DeleteOutline onClick={() => removeFromCart(itemData.id)} />
            </RemoveContainer>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add className="privacy" onClick={onClickIncrement} />
            <ProductAmount onChange={zeroItems(itemData.id)}>
              {quantity}
            </ProductAmount>
            <Remove className="privacy" onClick={onClickDecrement} />
          </ProductAmountContainer>
          <ProductPrice>¥{itemData.price}</ProductPrice>
          <MobileRemoveContainer>
            <DeleteOutline onClick={() => removeFromCart(itemData.id)} />
          </MobileRemoveContainer>
        </PriceDetail>
      </Product>
      <Hr />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

const Container = styled.div`
  font-size: 0.7rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 0.5em;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mobile({
    padding: "10px 0",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  })}
`;

const Image = styled.img`
  /* width: 14em; */
  width: 30%;

  ${mobile({
    width: "40%"
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;

  ${mobile({
    padding: "0.3em",
    fontSize: "1.4rem",
    paddingLeft: "1rem"
  })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: 1px solid teal;
`;

const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.1em;

  ${mobile({
    marginBottom: "0"
  })}
`;

const ProductAmount = styled.div`
  font-size: 1.5rem;
  padding: 0.4rem 0.7rem;
  border-radius: 10px;
  background-color: #ffb6c1;

  ${mobile({
    fontSize: "1.6rem"
  })}
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;

  ${mobile({
    fontSize: "1.5rem"
  })}
`;

const RemoveContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1em;
  margin-right: 1em;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  border-radius: 50%;
  cursor: pointer;

  ${mobile({
    display: "none"
  })}
`;

const MobileRemoveContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  border-radius: 50%;
  cursor: pointer;
  display: none;

  ${mobile({
    display: "flex"
  })}
`;
