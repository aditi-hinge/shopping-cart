import "../styles.css";
import LoginImage from "../Images/login-bg.jpg";
import styled from "styled-components";

import { mobile } from "../responsive";
import { Link } from "react-router-dom";

import { Close } from "@material-ui/icons";

export default function Login() {
  function welcome() {
    alert("Welcome!");
  }
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <InputContainer>
            <Input placeholder="Username" type="text" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Password" type="password" />
          </InputContainer>
          <InputContainer>
            <Link className="text-link" to={process.env.PUBLIC_URL + '/'}>
              <Button onClick={welcome}>LOG IN</Button>
            </Link>
          </InputContainer>
          <LinkContainer>
            <Links href="#0">Forgot password?</Links>
            <Links href="#0">Create new account</Links>
          </LinkContainer>
        </Form>
        <Link className="text-link" to={process.env.PUBLIC_URL + '/'}>
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
    url(${LoginImage}) right;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    background: "none"
  })}
`;

const Wrapper = styled.div`
  padding: 2em;
  /* width: 35%; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;

  ${mobile({
    height: "100vh",
    width: "100vw"
  })}
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const Form = styled.form``;

const InputContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 1em 0px;
  padding: 1em 2em;
  font-size: 1rem;
  box-sizing: border-box;
  width: 100%;

  ${mobile({
    border: "1px solid gray"
  })}
`;

const Links = styled.a`
  font-size: 0.8rem;
  margin: 1rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;

  &:hover {
    color: darkblue;
  }
`;

const LinkContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: 1em 0em;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.03rem;

  &:hover {
    filter: brightness(130%);
  }
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;

  ${mobile({
    marginTop: "7em",
    marginRight: "3em"
  })}
`;
