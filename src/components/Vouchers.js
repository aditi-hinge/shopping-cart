import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: #E5E4E2;
  margin-bottom: 20px;
`;
const Title = styled.h4`
`;

const Buttons = styled.div`
  /* display: flex; */

`;
const Button = styled.button`
  margin-right: 1em;
  padding: 0.3em 0.4em;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: #2B547E;

  &:hover{
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