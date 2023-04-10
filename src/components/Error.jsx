import React from "react";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center ">
      <div>
        <h1 className="text-gradient font-bold text-9xl mb-4 ">Oops!</h1>
        <p className="text-dimWhite text-lg">Something went wrong.</p>
        <p className="text-dimWhite text-lg">Try again later.</p>
      </div>
    </div>
  );
};

export default Error;
