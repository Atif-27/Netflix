/* eslint-disable jsx-a11y/iframe-has-title */

import { useSelector } from "react-redux";
import useFetchVideo from "../hooks/useFetchVideo";

const VideoBackground = ({ id }) => {
  const currentVideo = useSelector((store) => store.movies.currentVideo);
  useFetchVideo(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
  );
  if (!currentVideo) return;
  return (
    <div className=" w-full aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          currentVideo?.key +
          "?autoplay=1&mute=1&loop=1&modestbranding=1&controls=0&rel=0&showinfo=0"
        }
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
