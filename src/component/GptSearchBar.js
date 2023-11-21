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
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
