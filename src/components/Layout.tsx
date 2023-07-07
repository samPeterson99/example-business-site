import * as React from "react";
import { ReactNode } from "react";
import { Link } from "gatsby";
import { CartContext } from "../CartContext";
import "../styles/global.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [showFooterBar, setShowFooterBar] = React.useState(true);
  const { cart } = React.useContext(CartContext);

  const cartNumber = cart.reduce((acc, obj) => acc + obj.quantity, 0);

  return (
    <div>
      <nav className="sticky h-10 self-start px-4 flex flex-row items-center justify-between top-0 bg-white z-50">
        <h1 className="w-28 flex-none -mr-12 font-semibold italic">
          Sample Site
        </h1>
        <ul className="w-full flex flex-row justify-center gap-4 font-light items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <Link to="/cart">
          <h5 className="w-18 flex-none font-light">in-cart({cartNumber})</h5>
        </Link>
      </nav>
      <main>{children}</main>
      {/* {showFooterBar && (
        <div className="sticky self-start px-4 h-20 flex flex-row items-center bottom-0 bg-white z-50">
          <div className="w-full flex flex-row items-center">
            <h5 className="text-lg font-bold mr-2 ">Special Offer: </h5>
            <p className="mt-px">
              Some kind of special offer. You know the kind
            </p>
          </div>
          <div className="flex flex-row w-1/2 justify-end items-center">
            <button className="mt-2 mr-4 px-2 border-2 h-8 hover:border-green-500 hover:border-2">
              Claim Offer
            </button>
            <button
              className="mt-2"
              onClick={() => setShowFooterBar(false)}>
              X
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Layout;
