import styled from "styled-components";
// import { popularProducts } from "./data";
import ProductItem from "./ProductItem";

//8 import connect from react
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

//11. use this state as props in the function- 'products' in this case
function Products({ products }) {
  return (
    <Container>
      {products.map((prod) => (
        <ProductItem key={prod.id} productData={prod} />
      ))}
    </Container>
  );
}

//9. make StateToProps Function to connect
const mapStateToProps = (state) => {
  return {
    products: state.shop.products //from rootReducer and shoppingReducer
  };
};

//10. connect the two functions and export together
export default connect(mapStateToProps)(Products);
