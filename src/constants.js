export const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Popular",
    to: "category/popular",
  },
  {
    name: "Top Rated",
    to: "category/top_rated",
  },
  {
    name: "Upcoming",
    to: "category/upcoming",
  },
  {
    name: "Browse Movies",
    to: "/discover",
  },
];

export const sortByOptions = [
  { value: "popularity.desc", label: "popular" },
  { value: "release_date.desc", label: "Latest" },
  { value: "release_date.asc", label: "Oldest" },
  { value: "vote_average.desc", label: "Rating" },
];
export const ratingOptions = [9, 8, 7, 6, 5, 4, 3, 2, 1];
export const yearOptions = [
  { year: [2023, 2023], label: "2023" },
  { year: [2022, 2022], label: "2022" },
  { year: [2021, 2021], label: "2021" },
  { year: [2015, 2020], label: "2015 - 2020" },
  { year: [2010, 2014], label: "2010 - 2014" },
  { year: [2000, 2009], label: "2000 - 2009" },
  { year: [1990, 1999], label: "1990 - 1999" },
  { year: [1980, 1989], label: "1980 -  1989" },
  { year: [1970, 1979], label: "1970 - 1979" },
];
