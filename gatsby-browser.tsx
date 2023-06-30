import "./src/styles/global.css";
import React, { ReactElement } from "react";
import Layout from "./src/components/Layout";
import { WrapPageElementBrowserArgs } from "gatsby";
import { CartProvider } from "./src/CartContext";

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs): ReactElement => {
  return (
    <CartProvider>
      <Layout {...props}>{element}</Layout>
    </CartProvider>
  );
};
