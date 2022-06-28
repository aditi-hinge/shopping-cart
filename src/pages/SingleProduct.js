import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
// import OneProduct from "../components/OneProduct";
import { connect } from "react-redux";
import "../styles.css";
import { mobile } from "../responsive";
import { FavoriteBorder } from "@material-ui/icons";
import React from "react";
//redux

// import React from "react";
import {
  addToCart
  // adjustItemQty
} from "../components/redux/shopping/shopping-actions";

function SingleProduct({ current, addToCart }) {
  function addedToWishlist() {
    alert("Item added to wishlist.");
  }

  return (
    <Container>
      <h1>
        <Announcements />
        <Navbar />
        <ProductContainer>
          <ImgContainer>
            <Image src={current.img} alt={current.title} />
          </ImgContainer>
          <InfoContainer>
            <Title>{current.title}</Title>
            <Desc>
              <h4>Lorem ipinia savel dignissim lorem.</h4> Nullam facilisis
              ipsum laoreet sapien semper, id aliquam ipsum pulvinar. Donec
              rhoncus sapien at orci pharetra tempor. Vestibulum a pretium
              justo, at dapibus nunc. Maecenas blandit porttitor libero, vel
              mattis enim ultricies sit amet. Aliquam vel purus a justo vehicula
              condimentum. Vestibulum bibendum lacinia laoreet. Nunc imperdiet
              nisl eu velit consectetur, fermentum cursus sem aliquam. Aliquam
              venenatis, ante in facilisis pulvinar, leo enim mattis arcu, vitae
              fermentum neque erat id est. Cras vitae bibendum lectus. Donec nec
              viverra nunc. Fusce sit amet lorem sit amet mauris convallis mo
            </Desc>
            <Price>¥{current.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>COLOR</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>SIZE</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <HeartContainer>
                  <FavoriteBorder onClick={addedToWishlist} />
                </HeartContainer>
              </AmountContainer>
              <Button onClick={() => addToCart(current.id)}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </ProductContainer>
        <Newsletter />
        <Footer />
      </h1>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    cart: state.shop.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
    // adjustQty: (id, value) => dispatch(adjustItemQty(id, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);

const Container = styled.div``;

const ProductContainer = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 2rem;
`;

const Desc = styled.p`
  font-weight: 100;
  font-size: 1rem;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 1.5rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;

  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;

  &:hover {
    cursor: pointer;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: pink; */

  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const HeartContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
