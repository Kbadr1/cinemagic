import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const HeroSearchbar = () => {
  const { query, setQuery } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      navigate("/search");
    } else {
    }
  };
  return (
    <>
      <form
        className="flex flex-row items-center mb-20"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="rounded-l-full text-primary w-full px-4 py-3 md:py-4 outline-none "
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-gradient  rounded-r-full font-semibold text-primary px-4 md:px-8 py-3 md:py-4  ">
          Search
        </button>
      </form>
    </>
  );
};

export default HeroSearchbar;
