import Darkmode from "../iconComponents/Darkmodeicon";
import SvgMoon from "../iconComponents/moon";
import Sidebar from "../Sidebar";
import React, { useState } from "react";

const Index = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleButtonClick = (color: React.SetStateAction<string>) => {
    setBackgroundColor(color);
  };
  const [isMoonActive, setMoonActive] = useState(false);
  const [isIoToLeft, setIoToLeft] = useState(false);
  const toggleMoon = () => {
    setMoonActive(!isMoonActive);
    setIoToLeft(!isMoonActive);
  };


  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100vh",
        minWidth: "100wh",
      }}
    >
      <div>
        <Sidebar />
      </div>
      <div className="w-[354px] h-[270px] absolute left-[580px] top-[170px] flex flex-col justify-start items-end gap-8 ">
        <p className="text-right text-[#1E1E1E] text-[31px] font-IRANYekan font-bold break-words">
          تنظیمات
        </p>

        <div className="flex flex-col justify-start items-end gap-6">
          <div className="h-[16px] flex flex-col justify-start items-end gap-2">
            <div className="text-right text-[#1E1E1E] text-base font-IRANYekan font-normal capitalize break-words">
              انتخاب تم
            </div>
            <div className="w-[428.30px] flex flex-col justify-center items-end gap-[14.69px]">
              <div className="justify-center items-center gap-[13.36px] inline-flex">
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#FD7E14")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#FD7E14] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none "></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button
                    onClick={() => handleButtonClick("#FAB005")}
                    className="   border: ? '1px solid blue' : '1px solid black'"
                  >
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#FAB005]  border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#82C91E")}>
                    {" "}
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#82C91E] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none" ></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#40C057")}>
                    {" "}
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#40C057] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>

                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("208D8E")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#208D8E] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("white")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-white border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>

                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#12B886")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#12B886] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#15AABF")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#15AABF] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#228BE6")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#228BE6] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#4C6EF5")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#4C6EF5] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#7950F2")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#7950F2] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#BE4BDB")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#BE4BDB] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#E64980")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#E64980] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
                <div className="w-[20px] h-[20px] relative">
                  <button onClick={() => handleButtonClick("#FA5252")}>
                    <div className="w-[20px] h-[20px] left-[0px] top-[0px] absolute bg-[#FA5252] border-2 rounded-[8px] focus:border-blue-500  focus:outline-none"></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[24px] h-[24px] relative flex flex-col justify-start items-start mr-12 ">
              <div className="relative">
                <div
                  className={`cursor-pointer ml-[8px] h-[36px] w-[64px] flex flex-row items-center rounded-md ${
                    isMoonActive
                      ? "bg-[#111827] transition-all duration-500"
                      : "bg-gray-100 transition-all duration-500"
                  }`}
                  onClick={toggleMoon}
                >
                  <div
                    className={`w-[30px] h-[30px] absolute top-[3px] rounded-md ${
                      isIoToLeft
                        ? "bg-[#6b7280] transition-all duration-500"
                        : "bg-white transition-all duration-500"
                    }`}
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
                    <button onClick={() => handleButtonClick("white")}>
                      <SvgMoon />
                    </button>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      transition: "opacity 0.5s ease-in-out",
                      opacity: isMoonActive ? 0 : 1,
                    }}
                  >
                    <button onClick={() => handleButtonClick("#0f172a")}>
                      <Darkmode />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <div className="w-[354px] h-auto px-4 py-2 bg-teal-500 rounded-md flex justify-center items-center gap-2 mt-4">
                <div className="text-right text-white text-lg font-bold font-iranyekan capitalize break-words">
                  تغییرات
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
