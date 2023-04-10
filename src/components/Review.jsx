import React from "react";
import moment from "moment";
import { useState } from "react";

const Review = ({ author, created_at, content }) => {
  const [RandomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (550 - 450 + 1) + 450)
  );

  return (
    <div className="border border-dimBlue rounded-lg p-4">
      <h6 className="text-white  font-semibold">A review by {author}</h6>
      <p className="text-dimWhite text-xs font-extralight  mb-4">
        Written by {author} on {moment(created_at).format("LL")}
      </p>
      <p className="text-dimWhite text-sm font-light leading-7">
        {content.slice(0, RandomNumber)}
        {content.length >= RandomNumber && <>... </>}{" "}
        {content.length >= RandomNumber && (
          <button
            className="underline text-white hover:text-secondary transition-all duration-500"
            onClick={() => setRandomNumber(1000000000)}
          >
            read the rest
          </button>
        )}
      </p>
    </div>
  );
};

export default Review;
