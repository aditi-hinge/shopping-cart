import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <Container>
      <h1>
        <Announcements />
        <Navbar />
        <Message>
          <Text>
            <h2>Thank you for shopping with us.</h2>
            <h3 className="heading">Your order will be shipped soon!</h3>
          </Text>
          <Link className="text-link" to="/">
            <Button type="button">Continue Shopping</Button>
          </Link>
        </Message>
        <Newsletter />
        <Footer />
      </h1>
    </Container>
  );
}

const Container = styled.div``;

const Message = styled.div`
  background-color: #fdeef4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
  padding: 1em 0;
`;

const Text = styled.div`
  /* margin-top: 1em; */
`;

const Button = styled.button`
  padding: 1em 2em;
  margin-bottom: 1em;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  font-weight: 800;
  background-color: black;
  color: white;
`;
