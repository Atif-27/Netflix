import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className=" pt-[32%] md:pt-0 xl:pt-0 bg-black  overflow-x-hidden pb-10">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
