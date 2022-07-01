import "../styles.css";
import RegisterPageBgImage from "../Images/register-page-bg.jpg";
import styled from "styled-components";

import { mobile } from "../responsive";
import { Link } from "react-router-dom";

import { Close } from "@material-ui/icons";

export default function Register() {
  function thankYou() {
    alert("Thank you for joining us!");
  }
  return (
    <Container>
      <Wrapper>
        <Title>WELCOME TO LAMA.</Title>
        <Form>
          <InputContainer>
            <Input placeholder="First Name" type="text" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Last Name" type="text" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Username" type="text" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Email" type="email" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Password" type="password" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Confirm Password" type="password" />
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the Privacy Policy
          </Agreement>
          <Link className="text-link" to="/">
            <Button type="button" onClick={thankYou}>
              CREATE ACCOUNT
            </Button>
          </Link>
          <MobileAgreement>
            <b>Read Agreement Policy</b>
          </MobileAgreement>
        </Form>
        <Link className="text-link" to="/shopping-cart">
          <CloseContainer>
            <Close />
          </CloseContainer>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${RegisterPageBgImage}) center;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    background: "none"
  })}
`;

const Wrapper = styled.div`
  padding: 2em;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;

  ${mobile({
    width: "100%"
  })}
`;

const Title = styled.h3`
  font-size: 2rem;

  ${mobile({
    fontSize: "1.5rem"
  })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 2em 0 0;
  padding: 1em 2em;
  font-size: 1rem;
  display: block;

  ${mobile({
    border: "1px solid gray"
  })}
`;

const Agreement = styled.p`
  font-size: 0.7rem;
  margin: 1rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile({
    display: "none"
  })};
`;

const MobileAgreement = styled.p`
  display: none;

  ${mobile({
    display: "block",
    width: "100%",
    textAlign: "right",
    fontSize: "0.7rem",
    padding: "0.5em",
    marginRight: "2em"
  })};
`;

const Button = styled.button`
  /* width: 40%; */
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    filter: brightness(130%);
  }

  ${mobile({
    width: "90%",
    margin: "20px 2em 0 0",
    padding: "10px 20px"
  })}
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  margin-top: 10px;
  margin-right: 10px;
  color: white;
  background-color: black;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
