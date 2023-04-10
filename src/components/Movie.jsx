import React, { useState } from "react";
import { Link } from "react-router-dom";
import moviePlaceholder from "../assets/movie_placeholder.png";

const Movie = ({ movie }) => {
  const { id, poster_path, title, vote_average, release_date } = movie;
  const rating =
    vote_average >= 7.5
      ? "text-green-500"
      : vote_average >= 5
      ? "text-yellow-500"
      : vote_average > 1
      ? "text-red-500"
      : "text-white";

  const [hover, setHover] = useState(null);

  let onHover = (id) => {
    setHover(id);
  };

  let onOut = () => {
    setHover(null);
  };

  return (
    <div
      className="overflow-hidden rounded-xl"
      onMouseOver={() => onHover(id)}
      onMouseOut={onOut}
    >
      <Link
        to={`/movie/${id}`}
        className={`  transition-all duration-500 text-white hover:text-secondary`}
        key={id}
      >
        <div className="overflow-hidden rounded-xl">
          <img
            className={`rounded-xl w-full  ${
              hover ? "scale-110" : "scale-100"
            } transition-all duration-500`}
            src={`${
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : moviePlaceholder
            }`}
            alt="poster"
          />
        </div>

        <p className=" mt-3 overflow-ellipsis whitespace-nowrap overflow-hidden">
          {title}
        </p>
        <div className=" flex flex-row justify-between items-center">
          <p className={`font-semibold text-sm ${rating}`}>
            {vote_average !== 0 ? vote_average?.toString().slice(0, 3) : `-`}
          </p>
          <p className="text-dimWhite font-light text-sm ">
            {release_date?.slice(0, 4)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
