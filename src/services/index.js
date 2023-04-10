import { useQuery } from "react-query";
import axios from "axios";

const URL = "https://api.themoviedb.org/3";

// Get Movies By Category
export const useCategory = (page = 1, category) =>
  useQuery(["category", category, page], ({ queryKey }) => {
    const category = queryKey[1];
    return axios.get(
      `${URL}/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
  });
// Get the primary information about a movie.
export const useMovieDetails = (id) =>
  useQuery(["movieDetails", id], ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(
      `${URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,credits,images,keywords,external_ids,reviews,similar,recommendations`
    );
  });
// Search for movies.
export const useSearchMovies = (query, page = 1) =>
  useQuery(["searchMovies", query, page], ({ queryKey }) => {
    const query = queryKey[1];
    return axios.get(
      `${URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    );
  });

// Get the movies that belong to a keyword.
export const useKeywordMovies = (id, page = 1) =>
  useQuery(["keywordMovies", id, page], ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(
      `${URL}/keyword/${id}/movies?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
  });
// Get the details of a keyword by id
export const useKeyword = (id, page = 1) =>
  useQuery(["keyword", id], ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(
      `${URL}/keyword/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
  });
// Discover movies by different types of data
export const useDiscover = (
  page = 1,
  sortBy,
  releaseDateGte,
  releaseDateLte,
  voteAverage,
  genre,
  adult
) =>
  useQuery(
    [
      "discover",
      page,
      sortBy,
      releaseDateGte,
      releaseDateLte,
      voteAverage,
      genre,
      adult,
    ],
    ({ queryKey }) => {
      return axios.get(
        `${URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sortBy}&page=${page}&release_date.gte=${releaseDateGte}&release_date.lte=${releaseDateLte}&with_genres=${genre}&include_adult=${adult}&vote_average.gte=${voteAverage}`
      );
    }
  );
//Get the list of official genres for movies.
export const useGenres = () =>
  useQuery(["genres"], () => {
    return axios.get(
      `${URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    );
  });
