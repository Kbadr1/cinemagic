import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="container bg-black-gradient-2 rounded-xl p-8 lg:p-16">
      <div className="grid grid-cols-4">
        <div className="md:col-span-3 col-span-4 text-center md:text-start">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">
            Explore Millions of movies Now!
          </h1>
          <p className="text-dimWhite">Everything you looking for.</p>
        </div>
        <div className="md:col-span-1 col-span-4 flex items-center justify-center md:justify-end md:mt-0 mt-8">
          <Link
            to="/discover"
            className="bg-blue-gradient text-primary font-semibold md:px-8  md:py-4 px-4 py-2  rounded-xl hover:scale-110 transition-all duration-500"
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
