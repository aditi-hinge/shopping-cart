import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import "../styles.css";

import MensShoes from "../Images/mens-shoes.jpg";
import GrayShirt from "../Images/gray-shirt.jpg";

import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer";

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
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transperant"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 2.5em 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "2rem"};
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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const Image = styled.img`
  width: 14em;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin-bottom: 1.1em;
`;

const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`;

export default function Cart() {
  return (
    <Container>
      <h1>
        <Announcements />
        <Navbar />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src={MensShoes} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>Id: </b>5655641
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size: </b>37.8
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src={GrayShirt} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>HAKURA T-SHIRT
                    </ProductName>
                    <ProductId>
                      <b>Id: </b>5655641
                    </ProductId>
                    <ProductColor color="gray" />
                    <ProductSize>
                      <b>Size: </b> M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$20</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECK OUT</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </h1>
    </Container>
  );
}