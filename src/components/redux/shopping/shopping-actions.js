import * as actionTypes from "./shopping-types";

//6. make actions and export

// add an item of a particular id to the cart
export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    }
  };
};

// remove an item of a particular id to the cart
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  };
};

// increase or decrease the quantity of a particular item.
export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty
    }
  };
};

// load the whole item on a different screen when clicked
export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item
  };
};
