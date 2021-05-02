import { CART_ADD_ITEMS } from "../constants/cartConstanst";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.Type) {
    case CART_ADD_ITEMS: {
      const item = action.payload;
      const existsItem = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existsItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    default:
      return state;
  }
};
