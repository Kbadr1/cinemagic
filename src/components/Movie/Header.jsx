import React from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

const Header = ({ data }) => {
  const {
    poster_path,
    title,
    release_date,
    backdrop_path,
    genres,
    runtime,
    original_language,
    vote_average,
    overview,
    credits,
  } = data.data;

  const rating =
    vote_average >= 7.5
      ? "text-green-500"
      : vote_average >= 5
      ? "text-yellow-500"
      : vote_average > 1
      ? "text-red-500"
      : "text-white";

  return (
    <section
      className=" bg-cover mb-20"
      style={{
        backgroundImage: `linear-gradient(to left, #00040fd8 1%,#00040f), url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      <div className="container">
        <div className="grid grid-cols-4 gap-4 md:gap-8 py-12">
          <div className="col-span-4 sm:col-span-1 ">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt="poster"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-4 sm:col-span-3 flex flex-col items-start justify-center">
            <h1 className="text-white  text-3xl font-semibold mb-4">
              {title}{" "}
              <span className="text-dimWhite font-light text-xl">
                ({release_date.slice(0, 4)})
              </span>
            </h1>
            <div className="flex flex-row justify-start items-center mb-4 flex-wrap text-white">
              <p className=" font-light text-sm border border-white px-2 py-1  rounded-sm mr-2">
                {original_language.toUpperCase()}
              </p>
              <p className="font-light text-sm">{release_date}</p>
              <p className=" mx-1 text-xs">
                <GoPrimitiveDot />
              </p>
              {genres.map((genre, index) => (
                <p key={genre.id} className=" mr-1  font-light text-sm">
                  {genre.name}

                  {index !== genres.length - 1 ? "," : ""}
                </p>
              ))}
              <p className="mx-1 text-xs">
                <GoPrimitiveDot />
              </p>
              <p className="  font-light text-sm">
                {Math.floor(runtime / 60)}h {runtime & 60}m
              </p>
            </div>
            <p className={`mb-4 ${rating}`}>
              {vote_average > 0
                ? `${(vote_average * 10).toString().slice(0, 2)}% `
                : "- "}
              <span className=" text-white">User Score</span>
            </p>
            <h1 className=" text-white text-xl font-semibold  mb-2">
              Overview
            </h1>
            <p className="text-dimWhite  font-light ">{overview}</p>

            {credits.crew
              .filter(({ job }) => job === "Director")
              .slice(0, 1)
              .map((member) => (
                <div className="text-white mt-4" key={member.id}>
                  <h6 className="font-semibold ">{member.name}</h6>
                  <p className=" text-sm font-light">Director</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
