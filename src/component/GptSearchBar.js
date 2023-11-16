import { useSelector } from "react-redux";
import { lang } from "../utils/langConstants";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);
  return (
    <div className="pt-[10%] flex justify-center w-screen">
      <form className=" w-[600px] bg-black p-4 flex justify-between space-x-3">
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="w-10/12 p-3 rounded-md"
        />
        <button className="py-2 px-6 bg-red-700 text-white rounded-md">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
