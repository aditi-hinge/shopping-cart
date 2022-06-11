import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube
} from "@material-ui/icons";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div``;

const Desc = styled.p`
  color: #666362;
  font-size: 1rem;
  font-weight: 400;
  margin: 3em 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile({ textAlign: "center", marginBottom: "1em" })}
`;

const CountryInfo = styled.div`
  color: #666362;
  font-size: 1rem;
  font-weight: 400;
  margin: 3em 0px;

  ${mobile({ margin: "1em 0", fontSize: "0.8rem" })}
`;

const Country = styled.span`
  display: inline-block;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Socials = styled.div`
  display: flex;

  ${mobile({
    width: "100%",
    justifyContent: "space-around",
    marginTop: "1em"
  })}
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(prop) => prop.color};
  color: white;
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 0.5em;
  cursor: pointer;

  &:hover {
    filter: brightness(130%);
  }

  ${mobile({ margin: "0" })}
`;

export default function CompanyInfo() {
  return (
    <Container>
      <Socials>
        <Icon color="3B5999">
          <Facebook />
        </Icon>
        <Icon color="55ACEE">
          <Twitter />
        </Icon>
        <Icon color="E4405F">
          <Instagram />
        </Icon>
        <Icon color="FF0000">
          <YouTube />
        </Icon>
        <Icon color="E60023">
          <Pinterest />
        </Icon>
      </Socials>
      <Desc>
        <p>
          The content of this site is copyright-protected and is the property of
          LAMA.
        </p>
        <p>
          LAMA’s business concept is to offer fashion and quality at the best
          price in a sustainable way.
        </p>
        <p>
          LAMA has since it was founded in 1947 grown into one of the world's
          leading fashion companies.
        </p>
      </Desc>
      <Logo>LAMA.</Logo>
      <CountryInfo>
        <Country>JAPAN</Country> | ¥
      </CountryInfo>
    </Container>
  );
}
