import styled from "styled-components";
import CompanyInfo from "./CompanyInfo";
import ShopLinks from "./ShopLinks";

const Container = styled.div`
  /* display: flex; */
  margin: 1em;
`;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   /* padding: 20px; */
// `;

// const Right = styled.div`
//   flex: 1;
// `;

// const Center = styled.div`
//   flex: 1;
//   padding: 20px;
// `;

export default function Footer() {
  return (
    <Container>
      <ShopLinks />
      <CompanyInfo />
    </Container>
  );
}