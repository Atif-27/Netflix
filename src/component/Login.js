import React, { useEffect, useRef, useState } from "react";
import validate from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, USER_AVATAR } from "../utils/contants";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
  function submitHandler(e) {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!showSignIn) {
      //! Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCred) => {
          const user = userCred.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((err) => setErrorMessage(err.message));
        })
        .catch((err) => {
          const errorCode = err.code;
          const error = err.message;
          setErrorMessage(errorCode + "-" + error);
        });
    } else {
      //!  Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCred) => {
          const user = userCred.user;
        })
        .catch((err) => {
          const errorCode = err.code;
          const error = err.message;
          setErrorMessage(errorCode + "-" + error);
        });
    }
  }
  return (
    <div className="w-screen">
      <img
        src={BACKGROUND}
        className="h-screen w-screen object-cover"
        alt="bg"
      />
      <form
        onSubmit={submitHandler}
        className="absolute top-[50%] right-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-lg  text-white  w-full max-w-[500px] p-10 py-16 space-y-7"
      >
        <h1 className=" text-4xl pb-4 ">
          {showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {showSignIn ? null : (
          <input
            type="text"
            placeholder="Name"
            className="p-4 block my-4 w-full bg-gray-700 rounded-lg"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 block my-4 w-full bg-gray-700 rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 block my-4 w-full bg-gray-700 rounded-lg"
          ref={password}
        />
        {errorMessage && (
          <p className=" text-red-700 font-bold text-md">{errorMessage}</p>
        )}
        <button className="w-full m-auto bg-red-700 px-4 py-3 rounded-lg">
          {showSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer pt-2"
          onClick={() => setShowSignIn((show) => !show)}
        >
          {showSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an Account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
