import { useSelector } from "react-redux";
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
import GptSearch from "../component/GptSearch";

const Browse = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    addNowPlayingMovies,
    "nowPlayingMovies"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    addPopularMovies,
    "popularMovies"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming?page=1",
    addUpcomingMovies,
    "upcomingMovies"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    addTopRatedMovies,
    "topRatedMovies"
  );
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className=" ">
      <Header />

      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
