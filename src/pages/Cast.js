import React from "react";
import { useMovieDetails } from "../services";
import { useParams } from "react-router-dom";
import { LoadingSpinner, Error, SubPagesHeader } from "../components";
import avatar from "../assets/avatar.svg";

const Cast = () => {
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
      <section className="container mx-auto px-4 md:px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h6 className="text-white font-poppins text-xl font-semibold mb-4">
              Cast{" "}
              <span className="text-dimWhite font-light ml-1">
                {data.data.credits.cast.length}
              </span>
            </h6>
            <div>
              {data.data.credits.cast.map((member) => (
                <div className="flex flex-row items-center mb-4">
                  <div className="bg-gray-700 rounded-md">
                    <img
                      className={`w-14 h-16 rounded-md`}
                      src={
                        member.profile_path
                          ? `https://image.tmdb.org/t/p/original/${member.profile_path}`
                          : avatar
                      }
                      alt="profile_pic"
                    />
                  </div>
                  <div>
                    <p className="text-white font-poppins ml-4 ">
                      {member.name}
                    </p>
                    <p className="text-dimWhite font-poppins ml-4 text-xs font-light">
                      {member.character}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h6 className="text-white font-poppins text-xl font-semibold mb-4">
                Crew{" "}
                <span className="text-dimWhite font-light ml-1">
                  {data.data.credits.crew.length}
                </span>
              </h6>
              <div>
                {data.data.credits.crew.map((member) => (
                  <div className="flex flex-row items-center mb-4">
                    <div className="bg-gray-700 rounded-md">
                      <img
                        className={`w-14 h-16 rounded-md`}
                        src={
                          member.profile_path
                            ? `https://image.tmdb.org/t/p/original/${member.profile_path}`
                            : avatar
                        }
                        alt="profile_pic"
                      />
                    </div>
                    <div>
                      <p className="text-white font-poppins ml-4 ">
                        {member.name}
                      </p>
                      <p className="text-dimWhite font-poppins ml-4 text-xs font-light">
                        {member.job}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cast;
