import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTION } from "../utils/contants";

export default function useFetchMovies(API_LINK, action, state) {
  const dispatch = useDispatch();
  const movieIsPresent = useSelector((state) => state.movies.state);
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(API_LINK, TMDB_OPTION);
      const data = await res.json();
      dispatch(action(data.results));
    }
    !movieIsPresent && fetchMovies();
  }, []);
}
