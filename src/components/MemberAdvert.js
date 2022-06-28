import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: #e5e4e2;
  margin-bottom: 20px;

  ${mobile({
    padding: "1em 1.3em",
    marginBottom: "0"
  })}
`;

const Title = styled.h4`
  color: #ff0000;
  margin-bottom: 10px;
  font-size: 1.2rem;

  ${mobile({
    textAlign: "center"
  })}
`;

const Desc = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 1em;
  padding: 0.3em 0.4em;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  color: #2b547e;
  background-color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export default function MemberAdvert() {
  return (
    <Container>
      <Title>
        Members get 1000 welcome points + free shipping above ￥5000!
      </Title>
      <Desc>Not a member yet? Join now</Desc>
      <Button>JOIN NOW</Button>
    </Container>
  );
}
