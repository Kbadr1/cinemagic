import React from "react";
import Movie from "../Movie";

const Recommendations = ({ data }) => {
  const { recommendations } = data.data;

  return (
    <>
      {recommendations.results.length && (
        <section className="mb-20">
          <h2 className="text-white font-semibold font-poppins text-xl mb-4">
            Recommendations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendations.results.slice(0, 4).map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Recommendations;
