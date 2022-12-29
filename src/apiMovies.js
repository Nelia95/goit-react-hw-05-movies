import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const key = 'b54efa5af09c01fe28de18598482d789';

export async function fetchTrending() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${key}`);
  // const { results } = data;
  // return { results };
  const response = data.results;
  return response;
}

export async function fetchMoviesWithQuery(searchQuery) {
  const { data } = await axios.get(
    `/search/movie?api_key=${key}&language=en-US&page=1&query=${searchQuery}`
  );
  // const { results } = data;
  // return { results };
  return data.results;
}

export async function fetchMovieDetails(id) {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${key}&language=en-US`
  );
  // const { poster_path, title, overview, vote_average, genres } = data;
  // return { poster_path, title, overview, vote_average, genres };
  return data;
}

export async function fetchCast(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${key}&language=en-US`
  );

  return data.cast;
  // const { cast } = data;
  // return { cast };
}

export async function fetchReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  );
  // const { results } = data;
  return data.results;
}
