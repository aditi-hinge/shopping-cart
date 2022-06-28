import styled from "styled-components";
import CompanyInfo from "./CompanyInfo";
import ShopLinks from "./ShopLinks";

// import { mobile } from "../responsive";

const Container = styled.div`
  margin: 1em;
`;

export default function Footer() {
  return (
    <Container>
      <ShopLinks />
      <CompanyInfo />
    </Container>
  );
}
