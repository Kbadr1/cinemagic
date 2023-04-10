import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../services";
import {
  Header,
  Cast,
  Recommendations,
  Similar,
  Reviews,
  Side,
  Trailer,
} from "../components/Movie/index";
import { LoadingSpinner, Error } from "../components";

const Movie = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieDetails(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header data={data} />
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 lg:col-span-3">
            <Cast data={data} />
            <Reviews data={data} />
            <Trailer data={data} />
            <Recommendations data={data} />
            <Similar data={data} />
          </div>
          <div className="col-span-4 lg:col-span-1">
            <Side data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
