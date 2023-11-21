import { IMAGE_CDN_URL } from "../utils/contants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) {
    return (
      <div className="w-32 md:w-40 lg:w-48 aspect-video bg-gray-300 text-red-500 text-4xl font-extrabold flex justify-center items-center h-full">
        No Poster
      </div>
    );
  }
  return (
    <div className=" w-32 sm:w-36 lg:w-44 xl:w-48 hover:overflow-auto">
      <img
        className=" w-full "
        src={IMAGE_CDN_URL + movie.poster_path}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
