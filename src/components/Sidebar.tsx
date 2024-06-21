
import {assets} from '../assets/assets.ts';
const Sidebar = () => {
  return (
    <div>
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div className="flex items-center gap-3 pl-8 cursor-pointer ">
                    <img src={assets.home_icon} alt="" />

                    <p className='font-bold'>Home</p>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
