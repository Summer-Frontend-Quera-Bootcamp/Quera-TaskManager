import { FaExclamationCircle } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center h-screen bg-gray-100">
      <div className="flex gap-x-4 items-center ">
        <FaExclamationCircle className="text-6xl text-red-500" />
        <p className="text-4xl">صفحه مورد نظر یافت نشد</p>
      </div>
      <div className="flex flex-row text-9xl animate-ping">
        <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#118C80] to-[#4AB7D8]y">
          4
        </span>
        <span className=" font-extrabold text-red-primary">0</span>
        <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#118C80] to-[#4AB7D8]y">
          4
        </span>
      </div>
      <NavLink to="/">
        <div className="mt-xl flex items-center transition-all ease-in-out hover:animate-bounce hover:text-brand-primary">
          <span className="font-bold text-xl">بازگشت به صفحه اصلی</span>
          <TbArrowBigRightLinesFilled className="text-4xl ml-2 mt-1.5 rotate-20" />
        </div>
      </NavLink>
    </div>
  );
};

export default NotFound;
