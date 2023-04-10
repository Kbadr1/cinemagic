import React, { useState } from "react";
import Movie from "../components/Movie";
import {
  SubPagesHeader,
  Pagination,
  LoadingSpinner,
  Error,
} from "../components";
import { useCategory } from "../services";
import { useParams } from "react-router-dom";

const Category = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { name } = useParams();
  const { data, isLoading, isError } = useCategory(pageNumber, name);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <SubPagesHeader
        title={`${name === "top_rated" ? "top rated" : name} Movies`}
      />
      <section className="container  flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.data.results.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={data?.data.total_pages}
        />
      </section>
    </>
  );
};

export default Category;
