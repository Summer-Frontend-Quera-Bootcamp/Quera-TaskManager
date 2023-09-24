import { useState } from "react";
import Searchbox from "../Searchbox";
import Darkmode from "../iconComponents/Darkmodeicon";
import { Link } from "react-router-dom";
import SvgMoon from "../iconComponents/moon";

const Index = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [isMoonActive, setMoonActive] = useState(false);
  const [isIoToLeft, setIoToLeft] = useState(false);

  const toggleListVisibility = () => setListVisible(!isListVisible);

  const toggleMoon = () => {
    setMoonActive(!isMoonActive);
    setIoToLeft(!isMoonActive);
  };

  return (
    <div className="fixed flex flex-col justify-between right-0 h-screen border-l-2 w-[340px]">
      <div>
        <h2 className="text-HL font-extra-bold text-center mt-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8]">
          کوئرا تسک منیجر
        </h2>
        <div className="mt-[27px] mr-[50px] ml-[16px] ">
          <div className="flex select-none" onClick={toggleListVisibility}>
            <svg
              className={`transform transition-transform ${isListVisible ? "" : "rotate-90"}`}
              width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 10L12 14L16 10" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="ml-auto text-right text-TM font-extra-bold">
              ورک اسپیس ها
            </p>
          </div>
          {isListVisible && <Searchbox />}
        </div>
      </div>
      <div className=" h-[89px] m-[32px] relative">
        <Link to="/ShowInformation">
          <div className="absolute top-0 right-0 flex items-center cursor-pointer space-x-XS">
            <p className="font-medium text-TM">نیلوفر موجودی</p>
            <svg
              width="36" height="37" viewBox="0 0 36 37" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="37" rx="18" fill="#DBE4FF" />
              <path d="M16.5178 23H15.3833L11.0906 16.4273V23H9.96148V14.4691H11.0906L15.3942 21.0745V14.4691H16.5178V23ZM19.9671 14.4691L22.7543 21.4291L25.5471 14.4691H27.0034V23H25.8798V19.6782L25.9834 16.0891L23.1853 23H22.3234L19.5253 16.1109L19.6398 19.6782V23H18.5162V14.4691H19.9671Z"
                fill="#4C6EF5"
              />
            </svg>
          </div>
        </Link>
        <div className="absolute bottom-0 flex items-center justify-between w-full">
          <div className="relative">
            <div
              className={`cursor-pointer ml-[8px] h-[36px] w-[64px] flex flex-row items-center rounded-md ${isMoonActive ? "bg-[#111827] transition-all duration-500" : "bg-gray-100 transition-all duration-500"}`}
              onClick={toggleMoon}
            >
              <div
                className={`w-[30px] h-[30px] absolute top-[3px] rounded-md ${isIoToLeft ? "bg-[#6b7280] transition-all duration-500" : "bg-white transition-all duration-500"}`}
                style={{ left: isIoToLeft ? "11px" : "40px" }}
                id="io"
              ></div>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isMoonActive ? 1 : 0,
                }}
              >
                <SvgMoon />
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isMoonActive ? 0 : 1,
                }}
              >
                <Darkmode />
              </div>
            </div>
          </div>
          <Link to="/">
            <div className="flex items-center cursor-pointer">
              <p className="font-medium text-[#818181] text-TM">خروج</p>
              <svg
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6 3H18C19.105 3 20 3.895 20 5V19C20 20.105 19.105 21 18 21H6C4.895 21 4 20.105 4 19V5C4 3.895 4.895 3 6 3Z"
                  stroke="#818181" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11V13"
                  stroke="#818181" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4 5.00302V18.998C4 20.485 5.565 21.452 6.894 20.787L10.894 18.787C11.572 18.447 12 17.755 12 16.997V7.00302C12 6.24502 11.572 5.55302 10.894 5.21402L6.894 3.21402C5.565 2.54902 4 3.51602 4 5.00302Z"
                  stroke="#818181" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
