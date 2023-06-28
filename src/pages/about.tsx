import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>about</h1>
      <Link to="/">home</Link>
      <p>tutorial page. yup!</p>
    </main>
  );
};

export default AboutPage;
