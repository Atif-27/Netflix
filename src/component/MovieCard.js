import { IMAGE_CDN_URL } from "../utils/contants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48">
      <img src={IMAGE_CDN_URL + movie.poster_path} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
