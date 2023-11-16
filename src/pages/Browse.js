import Header from "../component/Header";
import MainContainer from "../component/MainContainer";
import SecondaryContainer from "../component/SecondaryContainer";

import useFetchMovies from "../hooks/useFetchMovies";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} from "../utils/movieSlice";

const Browse = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    addNowPlayingMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    addPopularMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming?page=1",
    addUpcomingMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    addTopRatedMovies
  );
  return (
    <div className=" ">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
