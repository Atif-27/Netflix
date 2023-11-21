import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";
import { deleteGptMovies } from "../utils/gptSlice";

const GptMovieSuggestion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(deleteGptMovies());
    };
  }, []);
  const gpt = useSelector((store) => store.gpt);
  const gptMovies = gpt.gptMovies;
  const movieNames = gpt.movieNames;

  return (
    <div>
      {gptMovies ? (
        <div className="p-12 m-4 bg-opacity-80  bg-black text-white z-10">
          {gptMovies.map((movies, index) => (
            <MovieList
              key={movieNames[index]}
              title={movieNames[index]}
              movies={movies}
            />
          ))}
        </div>
      ) : (
        <div>No Results found</div>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
