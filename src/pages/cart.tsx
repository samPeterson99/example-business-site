import * as React from "react";
import { CartContext } from "../CartContext";
import type { HeadFC, PageProps } from "gatsby";

const CartPage: React.FC<PageProps> = () => {
  const { cart, removeFromCart, updateQuantity } =
    React.useContext(CartContext);
  console.log(cart);

  let total = 0;
  cart.forEach(
    (item) =>
      (total +=
        (item.salePrice && item.sale ? item.salePrice : item.price) *
        item.quantity)
  );

  return (
    <main className="h-screen">
      <h2 className="font-light mx-4 w-full border-b-2">Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul className=" mx-4">
            {cart.map((item, index) => (
              <li
                className="py-2 flex flex-row justify-between border-b-2"
                key={index}>
                <div className="w-full flex flex-row">
                  <h5 className="py-8 px-8 text-5xl text-center text-rose-500 bg-slate-200">
                    {item.title}
                  </h5>
                  <div className="ml-2 flex flex-col justify-between">
                    <h5>The letter {item.title}</h5>
                    <div className="flex flex-row gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.title, item.quantity - 1)
                        }>
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.title, item.quantity + 1)
                        }>
                        +
                      </button>
                      <p className="ml-4 font-light">
                        {item.sale ? (
                          <div className="flex flex-row">
                            <p>${item.salePrice}</p>
                            <p className="ml-2 line-through">${item.price}</p>
                          </div>
                        ) : (
                          <p>${item.price}</p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <p>
                    $
                    {(item.sale && item.salePrice
                      ? item.salePrice
                      : item.price) * item.quantity}
                  </p>
                  <button onClick={() => removeFromCart(item.title)}>X</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full mt-2 px-4 flex flex-row justify-between bg-slate-300">
            <h6>Total</h6>
            <p>${total}</p>
          </div>
        </div>
      ) : (
        <p className="flex flex-col items-center">Your cart is empty.</p>
      )}
    </main>
  );
};

export default CartPage;
