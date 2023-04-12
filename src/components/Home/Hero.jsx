import React from "react";
import hero from "../../assets/hero.jpg";
import HeroSearchbar from "./HeroSearchbar";

const Hero = ({ query, setQuery }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
      #00040f), url(${hero})`,
      }}
      className="h-[400px] md:h-[500px] bg-cover custom-hero-layer flex flex-col items-center justify-center"
    >
      <div className="container  ">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4 ">
          Welcome.
        </h1>
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-12 ">
          Millions of <span className="text-gradient">movies</span> to discover.
          Explore now.
        </h2>
        <HeroSearchbar query={query} setQuery={setQuery} />
      </div>
    </div>
  );
};

export default Hero;
