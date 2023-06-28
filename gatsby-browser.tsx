import "./src/styles/global.css";
import React, { ReactElement } from "react";
import Layout from "./src/components/Layout";
import { WrapPageElementBrowserArgs } from "gatsby";

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs): ReactElement => {
  return <Layout {...props}>{element}</Layout>;
};
