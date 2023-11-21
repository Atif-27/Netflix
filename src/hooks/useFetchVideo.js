import { useEffect } from "react";
import { TMDB_OPTION } from "../utils/contants";
import { addCurrentVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
export default function useFetchVideo(API_LINK) {
  const dispatch = useDispatch();
  const trailerIsPresent = useSelector((store) => store.movies.currentVideo);

  useEffect(() => {
    async function fetchVideo() {
      const res = await fetch(API_LINK, TMDB_OPTION);
      const data = await res.json();
      let videoList = data.results;
      videoList = videoList.filter((video) => video.type === "Trailer");

      const trailer = videoList.length ? videoList[0] : data.results[0];
      dispatch(addCurrentVideo(trailer));
    }
    !trailerIsPresent && fetchVideo();
  }, []);
}
