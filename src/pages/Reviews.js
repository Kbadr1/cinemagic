import React from "react";
import { useMovieDetails } from "../services";
import { useParams } from "react-router-dom";
import { LoadingSpinner, Error, Review, SubPagesHeader } from "../components";

const Reviews = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieDetails(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <SubPagesHeader
        title={data.data.title}
        year={data.data.release_date.slice(0, 4)}
      />
      <div className="container">
        {data.data.reviews.results.map((review) => (
          <div key={review.id} className="mb-8">
            <Review
              author={review.author}
              created_at={review.created_at}
              content={review.content}
              movieId={id}
              reviewId={review.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
