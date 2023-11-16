const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video w-full pb-10 ">
      <h1 className=" font-bold text-6xl">{title}</h1>
      <p className="text-md py-6 max-w-xl">{overview}</p>
      <div className="space-x-6 text-lg flex">
        <button className="bg-white text-black px-3 w-48  py-2 hover:bg-opacity-80 rounded-lg">
          ▶ Play
        </button>
        <button className="bg-black text-white px-3 w-48 py-2 hover:bg-opacity-80  rounded-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
