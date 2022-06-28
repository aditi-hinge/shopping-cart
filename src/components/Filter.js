import styled from "styled-components";
import "../styles.css";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em;

  ${mobile({
    margin: "0",
    padding: "0.2em"
  })}
`;

const Left = styled.div`
  display: flex;

  ${mobile({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "#FBFBF9"
  })}
`;

const Right = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 400;

  ${mobile({
    display: "none"
  })}
`;

const Category = styled.div`
  margin-right: 0.8em;
  position: relative;
  display: inline-block;
  cursor: ${(props) => props.type === "right" && "pointer"};

  ${mobile({
    display: "grid",
    margin: "0"
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;

  ${mobile({
    padding: "5px",
    display: "grid",
    margin: "0.4em",
    border: "1px solid gray"
  })}
`;

const Option = styled.option``;

export default function Filter() {
  return (
    <Container>
      <Left>
        <Category>
          <Select>
            <Option disabled selected>
              SORT BY
            </Option>
            <Option>Recommended</Option>
            <Option>Newest</Option>
            <Option>Lowest Price</Option>
            <Option>Highest Price</Option>
          </Select>
        </Category>
        <Category>
          <Select>
            <Option disabled selected>
              SIZE
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Category>
        <Category>
          <Select>
            <Option disabled selected>
              COLOUR
            </Option>
            <Option>Beige</Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Brown</Option>
          </Select>
        </Category>
        <Category>
          <Select>
            <Option disabled selected>
              PATTERN
            </Option>
            <Option>Checked</Option>
            <Option>Floral</Option>
            <Option>Patterned</Option>
            <Option>Solid Colored</Option>
            <Option>Striped</Option>
          </Select>
        </Category>
      </Left>
      <Right>
        <Category type="right">303 Items</Category>
        <Category type="right">MODEL</Category>
        <Category type="right">PRODUCT</Category>
      </Right>
    </Container>
  );
}
