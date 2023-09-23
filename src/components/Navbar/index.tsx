import { useState } from "react";
import SvgCol from "../iconComponents/col";
import SvgCelender from "../iconComponents/celender";
import SvgDoList from "../iconComponents/dolist";
import Shareicon from "../iconComponents/Shareicon";
import Navborder from "../NavBorder/buttonborder";
import NavBoxSearch from "../NavbarSearch/navBoxSearch";
import SvgFilter from "../iconComponents/filter";

const Index = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const handleClick = (index: number) =>
    clickedIndex === index ? null : setClickedIndex(index);
  const setStyle = (index: number) =>
    clickedIndex === index ? { color: "#208D8E", fontWeight: "bold" } : {};
  return (
    <div className=" h-[125px] fixed right-[356px] top-[41px] left-[50px]">
      <div className="text-right border-b-2 h-[64px] flex items-center justify-between">
        <div className="flex cursor-pointer">
          <p className="font-bold text-TM">اشتراک‌گذاری</p>
          <Shareicon />
        </div>
        <div className="flex flex-row-reverse items-center space-x-3">
          <h1 className="ml-3 text-HXS font-extra-bold">پروژه اول</h1>
          <div>
            <svg
              width="1"
              height="22"
              viewBox="0 0 1 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18556e-08"
                x2="0.499999"
                y2="22"
                stroke="#999999"
              />
            </svg>
          </div>
          <div className="flex cursor-pointer">
            <p
              className="mr-1 font-extrabold select-none text-TM"
              style={setStyle(0)}
              onClick={() => handleClick(0)}
            >
              نمایش لیستی
            </p>

            <div style={setStyle(0)}>
              <SvgDoList />
            </div>
          </div>
          <div>
            <svg
              width="1"
              height="22"
              viewBox="0 0 1 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18556e-08"
                x2="0.499999"
                y2="22"
                stroke="#999999"
              />
            </svg>
          </div>
          <div className="flex cursor-pointer">
            <p
              className="mr-1 font-extrabold select-none text-TM"
              style={setStyle(1)}
              onClick={() => handleClick(1)}
            >
              نمایش ستونی
            </p>
            <div style={setStyle(1)}>
              <SvgCol />
            </div>
          </div>
          <div>
            <svg
              width="1"
              height="22"
              viewBox="0 0 1 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18556e-08"
                x2="0.499999"
                y2="22"
                stroke="#999999"
              />
            </svg>
          </div>
          <div className="flex cursor-pointer">
            <p
              className="mr-1 font-extrabold select-none text-TM"
              style={setStyle(2)}
              onClick={() => handleClick(2)}
            >
              تقویم
            </p>
            <div style={setStyle(2)}>
              <SvgCelender />
            </div>
          </div>
          <div>
            <svg
              width="1"
              height="22"
              viewBox="0 0 1 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18556e-08"
                x2="0.499999"
                y2="22"
                stroke="#999999"
              />
            </svg>
          </div>
        </div>
      </div>

      {clickedIndex !== null && (
        <div onClick={() => handleClick(clickedIndex)}>
          <Navborder
            width={clickedIndex === 0 ? 105 : clickedIndex === 1 ? 108 : 60}
            right={clickedIndex === 0 ? 101 : clickedIndex === 1 ? 234 : 368}
          />
        </div>
      )}
      <div
        className={`transition-transform ${
          clickedIndex !== null
            ? "transform translate-y-0 opacity-100"
            : "transform           -translate-y-full opacity-0"
        } ease-in-out duration-300`}
      >
        {clickedIndex === 2 ? (
          <div className="flex flex-row-reverse ">
            <NavBoxSearch />
            <div className="mt-[19.5px] mb-[19.px] mr-[236px]">
              <svg
                width="1"
                height="22"
                viewBox="0 0 1 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18556e-08"
                  x2="0.499999"
                  y2="22"
                  stroke="#999999"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div
            className={`transition-transform ${
              clickedIndex !== null
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-y-full opacity-0"
            } ease-in-out duration-300`}
          >
            {clickedIndex !== null && (
              <div className="flex flex-row-reverse ">
                <NavBoxSearch />
                <div className="mt-[19.5px] mb-[19.px] mr-[236px]">
                  <svg
                    width="1"
                    height="22"
                    viewBox="0 0 1 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.5"
                      y1="2.18556e-08"
                      x2="0.499999"
                      y2="22"
                      stroke="#999999"
                    />
                  </svg>
                </div>
                <div className="flex flex-row cursor-pointer">
                  <p className="mr-[6px] text-stone-900 text-xs font-normal mb-[20px] mt-[22px]">
                    فیلترها
                  </p>
                  <SvgFilter />
                </div>
                <div className="w-[155px] h-[29px] px-3 py-1 bg-blue-100 rounded justify-center items-center inline-flex mt-[16px] mr-[16px]">
                  <div className="text-right text-blue-500 text-xs font-normal  capitalize">
                    دسته‌بندی‌شده با: وضعیت
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
