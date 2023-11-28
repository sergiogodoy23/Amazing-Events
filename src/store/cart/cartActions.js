export const addToCart = (event) => ({
    type: 'ADD_TO_CART',
    payload: event,
  });
  
  export const removeFromCart = (eventId) => ({
    type: 'REMOVE_FROM_CART',
    payload: eventId,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
  