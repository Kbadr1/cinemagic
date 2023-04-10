import React from "react";

const Trailer = ({ data }) => {
  return (
    <>
      {data.data.videos.results.filter(({ type }) => type === "Trailer")
        .length && (
        <section className="mb-20">
          <h2 className="text-white font-semibold font-poppins text-xl mb-4">
            Trailer
          </h2>
          {data.data.videos.results
            .filter(({ type }) => type === "Trailer")
            .slice(0, 1)
            .map((video) => (
              <iframe
                title="trailer"
                key={video.key}
                allow="fullscreen;"
                className="rounded-md"
                width="100%"
                height="480px"
                src={`https://www.youtube.com/embed/${video.key}`}
              ></iframe>
            ))}
        </section>
      )}
    </>
  );
};

export default Trailer;
