import React, { useState } from "react";
import { useDiscover, useGenres } from "../services";
import { Movie, Pagination } from "../components";
import hero from "../assets/hero.jpg";
import { sortByOptions, ratingOptions, yearOptions } from "../constants";

const Discover = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [releaseDateGte, setReleaseDateGte] = useState("");
  const [releaseDateLte, setReleaseDateLte] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const [genre, setGenre] = useState("");
  const [adult, setAdult] = useState("");

  const { data } = useDiscover(
    pageNumber,
    sortBy,
    releaseDateGte,
    releaseDateLte,
    voteAverage,
    genre,
    adult
  );

  const { data: genres } = useGenres();

  const titleClass = "text-dimWhite mb-3";
  const selectClass =
    "bg-[#00040f] text-dimWhite px-4 py-4 rounded-md w-full font-semibold  outline-none ";
  const optionsClass = "bg-[#00040f] text-white";

  return (
    <>
      <section
        className="h-[400px] md:h-[500px] bg-cover custom-hero-layer  mb-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
      #00040f), url(${hero})`,
        }}
      >
        <h1 className="text-gradient text-center text-4xl font-semibold capitalize py-20">
          Discover Movies
        </h1>
        <div className="container grid grid-cols-2 lg:grid-cols-5 gap-6">
          <div>
            <p className={titleClass}>Order By:</p>
            <select
              className={selectClass}
              name="sort"
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortByOptions.map((option) => (
                <option
                  key={option.value}
                  className={optionsClass}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className={titleClass}>Rating:</p>
            <select
              name="vote average"
              onChange={(e) => setVoteAverage(e.target.value)}
              className={selectClass}
            >
              <option value="">All</option>
              {ratingOptions.map((r) => (
                <option key={r} value={r}>
                  {r}+
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className={titleClass}>Genre:</p>
            <select
              name="genres"
              onChange={(e) => setGenre(e.target.value)}
              className={selectClass}
            >
              <option value="">All</option>
              {genres?.data.genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className={titleClass}>Year:</p>
            <select
              className={selectClass}
              name="year"
              id=""
              onChange={(e) => {
                setReleaseDateGte(e.target.value.slice(0, 4));
                setReleaseDateLte(e.target.value.slice(5, 9));
              }}
            >
              <option value="">All</option>
              {yearOptions.map((y) => (
                <option key={y.label} value={y.year}>
                  {y.label}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden lg:block">
            <p className={titleClass}>Adult:</p>
            <select
              name="adult"
              onChange={(e) => setAdult(e.target.value)}
              className={selectClass}
            >
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.data.results.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={data?.data.total_pages}
      />
    </>
  );
};

export default Discover;
