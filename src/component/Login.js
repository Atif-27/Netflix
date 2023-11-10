import React from "react";

const Login = () => {
  return (
    <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"
      />
      <form className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-lg  text-white w-[500px] p-10 py-16 space-y-5">
        <h1 className=" text-4xl">Sign In</h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 block my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 block my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="w-full m-auto bg-red-700 px-4 py-3 rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
