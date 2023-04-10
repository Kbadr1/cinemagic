import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useKeyword, useKeywordMovies } from "../services";
import {
  LoadingSpinner,
  Error,
  Movie,
  SubPagesHeader,
  Pagination,
} from "../components";

const Keyword = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = useParams();
  const { data, isLoading, isError } = useKeywordMovies(id, pageNumber);
  const {
    data: keywordName,
    isLoading: keywordNameIsLoading,
    isError: keywordNameError,
  } = useKeyword(id);

  if (isLoading || keywordNameIsLoading) {
    return <LoadingSpinner />;
  }

  if (isError || keywordNameError) {
    return <Error />;
  }
  return (
    <>
      <SubPagesHeader title={keywordName.data.name} />

      <section className="container  flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.data.results.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={data.data.total_pages}
        />
      </section>
    </>
  );
};

export default Keyword;
