import React from "react";
import hero from "../assets/hero.jpg";

const SubPagesHeader = ({ title, year }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
    #00040f), url(${hero})`,
      }}
      className=" py-20 bg-cover "
    >
      <div className="container flex items-center justify-center flex-row">
        <h1 className="text-gradient text-4xl font-semibold capitalize">
          {title}{" "}
          {year && (
            <span className="font-light text-4xl text-dimWhite">({year})</span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default SubPagesHeader;
