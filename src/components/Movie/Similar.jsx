import React from "react";
import Movie from "../Movie";

const Recommendations = ({ data }) => {
  const { similar } = data.data;
  return (
    <>
      {similar.results.length && (
        <section>
          <h2 className="text-white font-semibold font-poppins text-xl mb-4">
            Similar Movies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similar.results.slice(0, 4).map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Recommendations;
