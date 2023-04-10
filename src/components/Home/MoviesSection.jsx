import React from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie";

const MoviesSection = ({ headerTitle, linkName, data }) => {
  return (
    <section className="container mb-24">
      <div className="flex flex-row justify-between items-center  mb-12">
        <Link to={`/category/${linkName}`}>
          <h2 className="text-gradient  text-2xl md:text-3xl font-semibold">
            {headerTitle}
          </h2>
        </Link>
        <Link
          to={`/category/${linkName}`}
          className="text-dimWhite hover:text-secondary transition-all duration-500"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 gap-y-8">
        {data?.data.results.slice(0, 8).map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default MoviesSection;
