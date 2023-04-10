import React from "react";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
  return (
    <div
      className={`${
        totalPages <= 1 ? "hidden" : "flex"
      }  flex-row justify-center items-center mt-20 `}
    >
      <button
        className={` flex-row items-center justify-center  border rounded-md px-4 py-2  ${
          pageNumber === 1
            ? "hidden"
            : "flex text-secondary cursor-pointer border-secondary bg-primary  hover:text-secondary transition-all"
        }`}
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <BiChevronsLeft /> previous
      </button>
      <p className="text-primary mx-4 bg-blue-gradient rounded-md px-4 py-2">
        {pageNumber}
      </p>
      <button
        className={`${
          pageNumber === totalPages ? "hidden" : "flex"
        } text-secondary bg-primary border border-secondary flex-row items-center justify-center  rounded-md px-4 py-2 cursor-pointer transition-all duration-500`}
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next <BiChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
