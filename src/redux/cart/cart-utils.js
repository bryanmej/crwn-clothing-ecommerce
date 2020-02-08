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

export const removeFromCart = (cartItems, itemToRemove) => {
  const itemExist = cartItems.find(item => item.id === itemToRemove.id);

  if (itemExist.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
