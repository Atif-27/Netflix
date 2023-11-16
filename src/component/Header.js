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
    <div className=" px-20 py-3 bg-gradient-to-b from-black w-full  flex justify-between items-center z-10 absolute">
      <img className="w-48 " src={LOGO} alt="logo" />
      {userData && (
        <div className="pr-8 flex space-x-4">
          <select
            className="bg-gray-900 text-white px-3 rounded-lg"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="p-3 px-4 text-white  bg-purple-600 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 " src={userData.photoURL} alt="pfp" />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
