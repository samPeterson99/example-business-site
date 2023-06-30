import React, { createContext, useEffect, useState } from "react";
import { ProductType } from "../types";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: ProductType[];
  addToCart: (item: ProductType) => void;
  updateQuantity: (itemTitle: string, newQuantity: number) => void;
  removeFromCart: (itemTitle: string) => void;
}

const defaultCartContext: CartContextProps = {
  cart: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
};

export const CartContext = createContext<CartContextProps>(defaultCartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedCartTimestamp = localStorage.getItem("cartTimestamp");

    if (storedCart && storedCartTimestamp) {
      const parsedCart = JSON.parse(storedCart) as ProductType[];
      const timestamp = parseInt(storedCartTimestamp, 10);

      if (Date.now() - timestamp <= 24 * 60 * 60 * 1000) {
        setCart(parsedCart);
      } else {
        localStorage.removeItem("cart");
        localStorage.removeItem("cartTimestamp");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartTimestamp", Date.now().toString());
  }, [cart]);

  const addToCart = (item: ProductType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItem) {
        const updatedCart = prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const updateQuantity = (itemTitle: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === itemTitle ? { ...item, newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemTitle: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== itemTitle));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
