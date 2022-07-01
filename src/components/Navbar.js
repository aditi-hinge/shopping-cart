import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import "../styles.css";

// using react-redux to increment cart value
import { connect } from "react-redux";
import React from "react";

function Navbar({ cart }) {
  // creating state for cart quantity value
  const [cartCount, setCartCount] = React.useState(0);

  // using useEffect hook so that the value on the cart symbol
  // changes if any item value from the cart or the state of cart changes
  React.useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={SearchStyle} />
          </SearchContainer>
        </Left>
        <Center>
          <Link className="text-link" to={process.env.PUBLIC_URL + '/'}>
            <Logo>AUDERY.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link className="text-link" to="/register">
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="text-link" to="/login">
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="text-link" to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

// use function to make props out of state from the cart
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Navbar);

const Container = styled.div`
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 1.4em 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}

  &:focus {
    outline: none;
  }
`;

const SearchStyle = {
  color: "gray",
  fontSize: "16px",
  cursor: "pointer"
};
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h3`
  font-weight: bold;

  ${mobile({ fontSize: "24px" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
