import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth).then(() => navigate("/"));
  }
  return (
    <div className="absolute px-6 py-3 bg-gradient-to-b from-black w-full  flex justify-between items-center">
      <img
        className="w-48 "
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
        alt="logo"
      />
      {userData && (
        <div className="pr-8">
          <img className="w-12 " src={userData.photoURL} alt="pfp" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
