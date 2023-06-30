import * as React from "react";
import { CartContext } from "../CartContext";
import type { HeadFC, PageProps } from "gatsby";

const CartPage: React.FC<PageProps> = () => {
  const { cart } = React.useContext(CartContext);
  console.log(cart);
  let total = 0;
  cart.forEach((item) => (total += item.price * item.quantity));

  return (
    <main>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} {item.price}X{item.quantity} ={" "}
                {item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>total {total}</p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
};

export default CartPage;
