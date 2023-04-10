import React from "react";
import { Link } from "react-router-dom";
import Review from "../Review";

const Reviews = ({ data }) => {
  const { reviews, id } = data.data;

  return (
    <>
      {reviews.total_results && (
        <section className="mb-20">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="text-white font-semibold  text-xl">
              Reviews{" "}
              <span className="text-dimWhite font-light">
                {reviews.total_results}
              </span>
            </h2>
            {reviews.total_results !== 0 && reviews.total_results !== 1 && (
              <Link
                to={`/movie/${id}/reviews`}
                className="text-dimWhite hover:text-secondary transition-all duration-500"
              >
                Read All Reviews
              </Link>
            )}
          </div>
          {reviews.total_results !== 0 && (
            <Review
              author={reviews.results[0].author}
              created_at={reviews.results[0].created_at}
              content={reviews.results[0].content}
              movieId={id}
              reviewId={reviews.results[0].id}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Reviews;
