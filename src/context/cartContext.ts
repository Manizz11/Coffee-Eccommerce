import { createContext } from "react";
import type { ProductType } from "../data/Product";

export type CartItem = ProductType & { quantity: number; totalPrice: number };

export type CartContextType = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: ProductType, quantity: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export default CartContext;
