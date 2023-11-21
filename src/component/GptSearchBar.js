import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { TMDB_OPTION } from "../utils/contants";
import { insertGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.language);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const filteredRes = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseMovies = filteredRes.map((movie) => fetchMovies(movie));
    // [promise,promise,promise,promise,promise]
    const movieRes = await Promise.all(promiseMovies);
    console.log(movieRes);
    dispatch(insertGptMovies({ movieNames: filteredRes, gptMovies: movieRes }));
  };
  async function fetchMovies(movie) {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_OPTION
    );
    const data = await res.json();
    return data.results;
  }
  return (
    <div className="text-xs sm:text-sm md:text-md lg:text-lg lg:pt-[15%] md:pt-[20%] sm:pt-[25%] pt-[45%]  flex justify-center mx-3">
      <form
        className="w-full  sm:w-3/4 lg:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-1 px-2  md:p-2 md:px-3  m-2 col-span-9 "
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 my-2 mx-1 md:m-2 p-2 md:py-2 md:px-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
