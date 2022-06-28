import * as actionTypes from "./shopping-types";

import { popularProducts } from "../../data";

//7. make an initial state and set it as state in shopping reducer

const INITIAL_STATE = {
  //12. instead of having the whole data array in this section for products,
  // seperate data file can be created and the array exported in this
  // object for 'initial state'
  products: popularProducts, //{id, img, name, price}
  cart: [], //{id, img, name, price, qty}
  currentItem: null,
  wishlist: [] //{id, img, name, price}
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      // get the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // check if items are in the cart already
      const inCart = state.cart.find((prod) =>
        prod.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              // if the item already exists in the cart, just increase the quantity of that item by 1
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : // if the item does not exist then make a new item card in the cart
            [...state.cart, { ...item, qty: 1 }]
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      // filter through the array of cart and only retain those item whos id does not match
      // with the id of the item clicked
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    }
    case actionTypes.ADJUST_ITEM_QTY: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        )
      };
    }
    case actionTypes.LOAD_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: action.payload
      };
    }
    default:
      return state;
  }
};

export default shoppingReducer;
