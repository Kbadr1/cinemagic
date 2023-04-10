import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaImdb, FaFacebookSquare } from "react-icons/fa";

const Side = ({ data }) => {
  const { status, budget, revenue, original_language, keywords } = data.data;

  const { facebook_id, twitter_id, instagram_id, imdb_id } =
    data.data.external_ids;

  return (
    <div className="font-poppins text-white">
      <div className="flex flex-row justify-start items-center mb-6">
        {facebook_id !== null && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.facebook.com/${facebook_id}`}
            className="mr-3 text-xl"
          >
            <FaFacebookSquare />
          </a>
        )}
        {twitter_id !== null && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.twitter.com/${twitter_id}`}
            className="mr-3 text-xl"
          >
            <BsTwitter />
          </a>
        )}
        {instagram_id !== null && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.instagram.com/${instagram_id}`}
            className="mr-3 text-xl"
          >
            <BsInstagram />
          </a>
        )}
        {imdb_id !== null && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://m.imdb.com/title/${imdb_id}`}
            className="mr-3 text-xl"
          >
            <FaImdb />
          </a>
        )}
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-4">
          <h6>Status</h6>
          <p className="text-sm font-extralight mb-6">{status}</p>
        </div>
        <div className="col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-4">
          <h6>Original Language</h6>
          <p className="text-sm font-extralight mb-6">
            {original_language.toUpperCase()}
          </p>
        </div>
        <div className="col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-4">
          <h6>Budget</h6>
          <p className="text-sm font-extralight mb-6">
            {budget > 0 ? `$${budget.toLocaleString()}` : "-"}
          </p>
        </div>
        <div className="col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-4">
          <h6>Revenue</h6>
          <p className="text-sm font-extralight mb-6">
            {revenue > 0 ? `$${revenue.toLocaleString()}` : "-"}
          </p>
        </div>
        <div className="col-span-4">
          <h6>Keywords</h6>
          {keywords.keywords.length
            ? keywords.keywords.map((word) => (
                <Link
                  key={word.id}
                  to={`/keyword/${word.id}`}
                  className="bg-dimBlue text-sm font-extralight mr-2 my-1 px-3 py-1 rounded-md inline-block hover:text-secondary  transition-all duration-500"
                >
                  {word.name}
                </Link>
              ))
            : "-"}
        </div>
      </div>
    </div>
  );
};

export default Side;
