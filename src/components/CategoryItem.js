import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 85vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  color: whitesmoke;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 1em 1.2em;
  font-size: 1rem;
  letter-spacing: 0.01em;
  border: none;
  background-color: white;
  color: #34282c;
  font-weight: 600;
  cursor: pointer;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SEE MORE</Button>
      </Info>
    </Container>
  );
}
