import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND } from "../utils/contants";

const GptSearch = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BACKGROUND}
          alt="bg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
