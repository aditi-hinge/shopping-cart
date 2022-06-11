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
`;

const Title = styled.h4`
  text-align: center;
`;

const Buttons = styled.div`
  width: 8em;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-top: 1em;
  padding: 0.3em 0.4em;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: #2b547e;

  ${mobile({ display: "flex" })}

  &:hover {
    text-decoration: underline;
  }
`;

export default function Vouchers() {
  return (
    <Container>
      <Title>Want to earn bonus vouchers?</Title>
      <Buttons>
        <Button>Become a member</Button>
        <Button>Read more</Button>
      </Buttons>
    </Container>
  );
}
