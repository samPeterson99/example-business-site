import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col">
      <section className="bg-green-500 w-full landingBox relative flex-grow">
        <div className="absolute w-1/2 h-1/4 bg-white left-12 top-1/3 flex flex-col p-4">
          <h2 className="text-lg font-semibold">The Stuff You Need</h2>
          <p className="mt-px">
            You won't believe this stuff we have. It's literally so crazy. Check
            it out.
          </p>
          <Link
            to="/shop"
            className="mt-2 mb-px border-2 w-1/2 text-center hover:border-green-500 hover:border-2">
            Shop
          </Link>
        </div>
        <h1 className=" text-white text-6xl absolute bottom-0 left-2/4">
          Sample Site
        </h1>
      </section>
      <h3 className="font-light mx-4 py-2 w-full border-b-2">What's on sale</h3>
      <section className="flex flex-row flex-nowrap"></section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
