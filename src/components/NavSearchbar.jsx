import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchMovies } from "../services";
import { Link } from "react-router-dom";
import { TbMovie } from "react-icons/tb";

const NavSearchbar = ({ searchToggle, setSearchToggle }) => {
  const [query, setQuery] = useState("");
  const { data } = useSearchMovies(query);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchToggle(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className={`bg-black-gradient absolute top-20 w-full z-50 ${
        searchToggle ? "flex" : "hidden"
      }`}
    >
      <div className="container flex flex-row items-center justify-start">
        <FaSearch className="mr-4 text-dimWhite" />
        <input
          type="text"
          className={` w-full  outline-none py-3 text-dimWhite bg-transparent`}
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div
        onClick={() => setSearchToggle(!searchToggle)}
        className={` bg-black-gradient-2 text-white absolute w-full top-12 z-50 ${
          data && data.data.results.length ? "" : "hidden"
        }`}
      >
        {data &&
          data.data.results.slice(0, 8).map((movie) => {
            return (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div className="px-4 py-2 hover:text-secondary hover:bg-dimBlue transition-all duration-300 border-t border-gray-700 ">
                  <p className="container flex flex-row items-center justify-start">
                    <TbMovie className="mr-4 text-white" /> {movie.title}
                    {movie.release_date && (
                      <span className="text-sm font-light text-dimWhite ml-1">
                        ({movie.release_date.slice(0, 4)})
                      </span>
                    )}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default NavSearchbar;
