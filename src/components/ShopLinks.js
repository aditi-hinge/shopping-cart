import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10em;

  ${mobile({
    height: "2em",
    justifyContent: "space-around",
    alignItems: "left"
  })};
`;

const Section = styled.div`
  margin: 1em;
  display: block;

  ${mobile({ margin: "0" })};
`;

const Title = styled.p`
  margin-bottom: 30px;
  font-size: 1.2rem;
  white-space: nowrap;
  color: #736f6e;

  ${mobile({
    marginBottom: "0",
    fontSize: "0.7rem",
    textAlign: "left",
    textDecoration: "underline"
  })};
`;

const List = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;

  ${mobile({ display: "none" })};
`;

const ListItem = styled.div`
  width: 50%;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  white-space: nowrap;
  color: #736f6e;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #666362;
  }
`;

export default function ShopLinks() {
  return (
    <Container>
      <Section>
        <Title>SHOP</Title>
        <List>
          <ListItem>Ladies</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Baby</ListItem>
          <ListItem>Kids</ListItem>
          <ListItem>LAMA. HOME</ListItem>
        </List>
      </Section>
      <Section>
        <Title>CORPORATE INFO</Title>
        <List>
          <ListItem>Career at LAMA.</ListItem>
          <ListItem>About LAMA. group</ListItem>
          <ListItem>Sustainability</ListItem>
          <ListItem>Press</ListItem>
          <ListItem>Investor relations</ListItem>
        </List>
      </Section>
      <Section>
        <Title>HELP</Title>
        <List>
          <ListItem>Customer Service</ListItem>
          <ListItem>My LAMA.</ListItem>
          <ListItem>Find a store</ListItem>
          <ListItem>Legal & Privacy</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Section>
    </Container>
  );
}
