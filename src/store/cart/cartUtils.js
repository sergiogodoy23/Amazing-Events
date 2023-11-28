

export const addItemInCart = (cartItems, event) => {
    const eventInCart = cartItems.find(item => item._id === event._id);

   


    if (eventInCart) {
        console.log(eventInCart)


        return cartItems.map(item =>
            item._id === eventInCart._id ? 
            {...item, quantity: item.quantity === 4 ? event.quantity : item.quantity + 1}
            : item
        );
        }
    return [...cartItems, {...event, quantity: event.quantity}];
}


export const removeItemCart = (cartItems, id) => {
    const eventRemove = cartItems.find(item => item._id === id);

    if (eventRemove.quantity > 1) {
        return cartItems.map(item =>
            item._id === eventRemove._id ?
            {...item, quantity: item.quantity - 1}
            : item
        );
    }

    return cartItems.filter(item => item._id !== eventRemove._id);
}
