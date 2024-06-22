import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between font-semibold">
        <div className="flex items-center gap-4">
          <div
            className="bg-black rounded-2xl p-2 cursor-pointer"
            onClick={() => Navigate(-1)}
          >
            <img className="w-4 h-4" src={assets.arrow_left} alt="Left Arrow" />
          </div>
          <div
            className="bg-black rounded-2xl p-2 cursor-pointer"
            onClick={() => Navigate(+1)}
          >
            <img
              className="w-4 h-4"
              src={assets.arrow_right}
              alt="Right Arrow"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-8 h-8 rounded-full items-center font-bold text-center justify-center">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className=" bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className=" bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcast
        </p>
      </div>
    </>
  );
};

export default Navbar;
