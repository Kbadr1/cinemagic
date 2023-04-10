import React from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="">
        <TailSpin
          height="80"
          width="80"
          color="#00f6ff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
