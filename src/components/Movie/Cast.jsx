import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.svg";

const Cast = ({ data }) => {
  const { credits } = data.data;

  return (
    <section className="mb-20">
      <div className="flex flex-row items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-xl">Top Billed Cast</h2>
        <Link
          to={`/movie/${data.data.id}/cast`}
          className="text-dimWhite hover:text-secondary transition-all duration-500"
        >
          Full Cast & Crew
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {credits?.cast.slice(0, 6).map((actor) => (
          <div key={actor.id}>
            <img
              className=" w-full h-[160px] rounded-md mb-3 bg-gray-700"
              src={`${
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                  : avatar
              }`}
              alt=""
            />
            <p className="text-white overflow-ellipsis whitespace-nowrap overflow-hidden">
              {actor.name}
            </p>
            <p className="text-dimWhite font-light text-xs overflow-ellipsis whitespace-nowrap overflow-hidden">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cast;
