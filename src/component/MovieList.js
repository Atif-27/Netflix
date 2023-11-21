import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-3xl py-3  md:py-6">{title}</h1>

      <div id="scroll-x" className="flex overflow-auto overflow-y-hidden">
        <div className="flex space-x-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
