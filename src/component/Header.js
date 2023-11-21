import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/contants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/langConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const userData = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function handleSignOut() {
    signOut(auth);
  }
  function handleGptSearchClick() {
    dispatch(toggleShowGptSearch());
  }
  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="bg-gradient-to-b from-black  md:px-10 md:py-3 pb-4 absolute w-full flex flex-col md:flex-row  justify-between items-center z-10 text-xs sm:text-sm md:text-md ">
      <img className="w-40 sm:w-42 md:w-46  lg:w-48" src={LOGO} alt="logo" />
      {userData && (
        <div className="flex space-x-4  px-4">
          <select
            className="bg-gray-900 text-white px-1 md:px-3 rounded-lg"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="p-1 md:p-3 px-3 md:px-4 text-white  bg-purple-600 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "AI Suggestions"}
          </button>
          <img className="w-10 md:w-12" src={userData.photoURL} alt="pfp" />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
