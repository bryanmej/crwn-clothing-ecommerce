export const addToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find(item => item.id === itemToAdd.id);

  if (itemExist) {
    return cartItems.map(item =>
      item.id === itemToAdd.id
        ? {
            ...item,
            quantity: ++item.quantity
          }
        : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
