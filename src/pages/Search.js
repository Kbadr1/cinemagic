import React from "react";
import { useSearchMovies } from "../services";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import {
  LoadingSpinner,
  Error,
  SubPagesHeader,
  Movie,
  Pagination,
} from "../components";

const Search = () => {
  const { query, setQuery, search, setSearch } = useContext(SearchContext);

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useSearchMovies(query, pageNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      <SubPagesHeader
        title={
          query.trim() !== ""
            ? ` ${data.data.results.length ? query : `Search Movies`}`
            : `Search Movies`
        }
      />
      <div className="container">
        <form
          className="flex flex-row items-center mb-20"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="rounded-l-full text-primary w-full px-4 py-3 md:py-4 outline-none "
            placeholder="Search for a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-gradient  rounded-r-full font-semibold text-primary px-4 md:px-8 py-3 md:py-4  ">
            Search
          </button>
        </form>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.data.results.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={data.data.total_pages}
        />
      </div>
    </>
  );
};

export default Search;
