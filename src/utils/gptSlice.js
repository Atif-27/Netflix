import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    toggleShowGptSearch(state, action) {
      state.showGptSearch = !state.showGptSearch;
    },
    insertGptMovies(state, action) {
      state.gptMovies = action.payload.gptMovies;
      state.movieNames = action.payload.movieNames;
    },
    deleteGptMovies(state) {
      state.gptMovies = null;
      state.movieNames = null;
    },
  },
});

export default gptSlice.reducer;

export const { toggleShowGptSearch, insertGptMovies, deleteGptMovies } =
  gptSlice.actions;
