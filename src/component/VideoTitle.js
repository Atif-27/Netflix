const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[16%] py-2   px-8 sm:px-10  md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video w-full pb-10  ">
      <h1 className=" font-bold text-3xl sm:pb-2 md:pb-0 sm:text-5xl  md:text-6xl">
        {title}
      </h1>
      <p className="hidden md:block text-md py-6 max-w-xl">{overview}</p>
      <div className="space-x-6 text-lg flex mt-4">
        <button className="bg-white text-black text-sm md:text-lg  px-5 py-2 md:w-48   hover:bg-opacity-80 rounded-lg">
          ▶ Play
        </button>
        <button className=" hidden md:inline-block bg-black text-white px-3 w-48 py-2 hover:bg-opacity-80  rounded-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
