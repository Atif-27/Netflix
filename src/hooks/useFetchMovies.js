import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTION } from "../utils/contants";

export default function useFetchMovies(API_LINK, action) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(API_LINK, TMDB_OPTION);
      const data = await res.json();
      dispatch(action(data.results));
    }
    fetchMovies();
  }, []);
}
