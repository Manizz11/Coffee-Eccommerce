import React from 'react'
import CartContext from "../context/cartContext"
import type { CartItem } from "../context/cartContext"
import type { ProductType } from "../data/Product"

const CartState = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addToCart = (product: ProductType, quantity: number) => {
    if (quantity <= 0) return;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity, totalPrice: item.price * (item.quantity + quantity) }
            : item
        );
      }
      return [...prev, { ...product, quantity, totalPrice: product.price * quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) => prev.map((item) =>
        item.id === id ? { ...item, quantity, totalPrice: item.price * quantity } : item
      ));
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart, updateQuantity, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
