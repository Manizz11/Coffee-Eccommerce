import React from 'react'
import CartContext from "../context/cartContext"
import type { CartItem } from "../context/cartContext"
import type { ProductType } from "../data/Product"

const CartState = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const addToCart = (product: ProductType, quantity: number) => {
    if (quantity <= 0) return;
    const newProduct: CartItem = {
      ...product,
      quantity,
      totalPrice: product.price * quantity,
    };
    setCartItems((prev) => [...prev, newProduct]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
