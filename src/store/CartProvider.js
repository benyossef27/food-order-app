import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHendler = () => {};
  const removeItemToCartHendler = () => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHendler,
    removeItem: removeItemToCartHendler,
  };
  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
