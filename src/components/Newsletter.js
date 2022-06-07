import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
  height: 10em;
`;
const Title = styled.h2`
  font-size: 3rem;
  letter-spacing: 0.1rem;
  margin: 1.4rem;
`;

const Description = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

const InputContainer = styled.div`
  height: 40px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  padding-left: 1em;
  flex: 8;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Join Our Newsletter</Title>
      <Description>
        Sign up now and be the first to know about exclusive offers, latest
        fashion news & style tips!
      </Description>
      <InputContainer>
        <Input placeholder="email address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}