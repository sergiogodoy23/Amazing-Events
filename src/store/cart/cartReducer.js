import { addItemInCart, removeItemCart } from "./cartUtils";



// const initialState = {
//     cartItems: [],
//   };
  
const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  };
  
  const cartReducer = (state = initialState, action) => {



    switch (action.type) {
      case 'ADD_TO_CART':
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return {
          ...state,
          cartItems: addItemInCart(state.cartItems, action.payload)
        };

      case 'REMOVE_FROM_CART':
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return {
          ...state,
          cartItems: removeItemCart(state.cartItems, action.payload),
        };
  
      case 'CLEAR_CART':

        return {
          ...state,
          cartItems: [],

        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  