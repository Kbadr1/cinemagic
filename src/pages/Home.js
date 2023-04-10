import React from "react";
import { Hero, MoviesSection, FooterSection } from "../components/Home";
import { useCategory } from "../services";

const Home = () => {
  const { data: popularData } = useCategory(1, "popular");
  const { data: topratedData } = useCategory(1, "top_rated");
  const { data: upcomingData } = useCategory(1, "upcoming");

  return (
    <div>
      <Hero />
      <MoviesSection
        data={popularData}
        headerTitle={`What's Popular`}
        linkName={`popular`}
      />
      <MoviesSection
        data={topratedData}
        headerTitle={`Top Rated`}
        linkName={`top_rated`}
      />
      <MoviesSection
        data={upcomingData}
        headerTitle={`Coming Soon`}
        linkName={`upcoming`}
      />
      <FooterSection />
    </div>
  );
};

export default Home;
