import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="p-4  lg:p-12  bg-black text-white z-10 relative">
      <div className=" -mt-16 md:-mt-8 lg:-mt-32 xl:-mt-52">
        <MovieList title={`Now Playing`} movies={movies.nowPlayingMovies} />
        <MovieList title={`Popular `} movies={movies.popularMovies} />
        <MovieList title={`Top Rated`} movies={movies.topRatedMovies} />
        <MovieList title={`Upcoming`} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
