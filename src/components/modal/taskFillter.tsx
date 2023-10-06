import { useState, useRef, useEffect } from "react";
import {
  Typography,
} from "@material-ui/core";

import { BiChevronDown } from "react-icons/bi";
const TaskFilter = () => {
  const [inputVal, setInputVal] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedTag, setSelectedTag] = useState({
    title: "",
    style: {},
  });
  const [open, setOpen] = useState(false);
  const [opentag, setOpenTag] = useState(false);
  const [openIsOR, setOpenIsOr] = useState(false);
  const [inputTag, setInputTag] = useState("");
  const [selectedIsOr, setSelectedIsOr] = useState("");
  const [inputIsOr, setInputIsOr] = useState("");
  const ulRef = useRef(null);
  const ulTagRef = useRef(null);
  const ulIsOrRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ulRef.current &&
        !(ulRef.current as HTMLElement).contains(event.target as HTMLElement)
      ) {
        setOpen(false);
      }
      if (
        ulTagRef.current &&
        !(ulTagRef.current as HTMLElement).contains(event.target as HTMLElement)
      ) {
        setOpenTag(false);
      }
      if (
        ulIsOrRef.current &&
        !(ulIsOrRef.current as HTMLElement).contains(
          event.target as HTMLElement
        )
      ) {
        setOpenIsOr(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [useRef]);
  const whereList = [
    { title: "تاریخ", value: "تاریخ" },
    { title: "تگ", value: "تگ" },
    { title: "اعضا", value: "اعضا" },
    { title: "اولویت", value: "اولویت" },
  ];
  const tagList = [
    {
      title: "درس",
      value: "درس",
      style: { color: "#228BE6", background: "#D0EBFF" },
    },
    {
      title: "کار",
      value: "کار",
      style: { color: "#7950F2", background: "#E5DBFF" },
    },
    {
      title: "پروژه",
      value: "پروژه",
      style: { color: "#15AABF", background: "#C5F6FA" },
    },
  ];
  const isOrList = [
    { title: "است", value: "است" },
    { title: "نیست", value: "نیست" },
  ];

  return (
    <div className="flex flex-row-reverse items-center gap-2 mt-2">
      <Typography
        style={{
          fontFamily: "Yekan",
          fontSize: "14px",
          fontWeight: "400",
        }}
      >
        تسک هایی که
      </Typography>
      <div ref={ulRef}>
        <div
          className={`w-[152px] h-[30px] px-2 pt-[5px] pb-1  bg-white rounded-md border border-gray-200  justify-between items-center inline-flex flex-row-reverse cursor-pointer text-xs select-none ${
            selected ? "text-stone-900" : "text-stone-400"
          }`}
          onClick={() => setOpen(!open)}
        >
          {selected ? selected : "انتخاب کنید"}
          <BiChevronDown className="cursor-pointer" size={18} />
        </div>

        <ul
          ref={ulRef}
          className={`absolute  w-[152px] z-[1] ${
            open ? "max-h-[170px] opacity-100" : "max-h-0 opacity-0"
          } overflow-y-auto space-y-2 shadow-lg  bg-white text-right text-zinc-800 text-xs font-normal border-gray-200 rounded-lg`}
        >
          <div className="flex flex-row-reverse justify-center items-center border-b">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.2155"
                cy="9.71552"
                r="5.88495"
                stroke="#208D8E"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.6695 17.1695L14.3765 13.8765"
                stroke="#208D8E"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="جستجو بین فیلترها"
              className="outline-none text-right w-full select-none"
            />
          </div>
          {whereList.map((items) => (
            <div>
              <li
                ref={ulRef}
                key={items.title}
                className={`hover:bg-gray-100 rounded-[14px] pb-1 p-1 mb-[4px] mr-2 h-5 ml-auto inline-flex cursor-pointer items-center text-[12px]  text-right transition-all ease-in-out duration-150 select-none ${
                  items.title.startsWith(inputVal) ? "block" : "hidden"
                }`}
                onClick={() => {
                  if (items.title !== selected) {
                    setSelected(items.title);
                    setOpen(false);
                  }
                }}
              >
                {items.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <Typography
        style={{
          fontFamily: "Yekan",
          fontSize: "14px",
          fontWeight: "400",
        }}
      >
        آن‌ها
      </Typography>
      <div ref={ulTagRef}>
        <div
          className={`w-[132px] h-[30px] px-2 pt-[5px] pb-1  bg-white rounded-md border border-gray-200 justify-between cursor-pointer items-center inline-flex flex-row-reverse text-xs select-none ${
            selectedTag ? "text-stone-400" : "text-stone-900"
          }`}
          style={selectedTag.style}
          onClick={() => setOpenTag(!opentag)}
        >
          {selectedTag.title ? selectedTag.title : "انتخاب کنید"}
          <BiChevronDown className="cursor-pointer" size={18} />
        </div>
        <ul
          className={`absolute  w-[132px] z-[1] ${
            opentag ? "max-h-[170px] opacity-100" : "max-h-0 opacity-0"
          } overflow-y-auto space-y-2 shadow-lg  bg-white text-right text-zinc-800 text-xs font-normal border-gray-200 rounded-lg`}
        >
          <div className="flex flex-row-reverse justify-center items-center border-b">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.2155"
                cy="9.71552"
                r="5.88495"
                stroke="#208D8E"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.6695 17.1695L14.3765 13.8765"
                stroke="#208D8E"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="text"
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
              placeholder="جستجو"
              className="outline-none text-right w-full select-none"
            />
          </div>
          {tagList.map((items) => (
            <div>
              <li
                key={items.title}
                style={items.style}
                className={` rounded-[14px] pb-1 p-1 mt-1 mb-[8px] mr-2 h-5 ml-auto inline-flex cursor-pointer items-center text-[12px]  text-center ease-in-out  w-auto transition-all select-none ${
                  items.title.startsWith(inputTag) ? "block" : "hidden"
                }`}
                onClick={() => {
                  if (items.title !== selectedTag.title) {
                    setSelectedTag({
                      title: items.title,
                      style: items.style,
                    });
                    setOpenTag(false);
                  }
                }}
              >
                {items.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div ref={ulIsOrRef}>
        <div
          className={`w-[102px] h-[30px] px-2 pt-[5px] pb-1 cursor-pointer bg-white rounded-md border border-gray-200  justify-between items-center inline-flex flex-row-reverse text-xs select-none 
          ${selectedIsOr ? "text-stone-900" : "text-stone-400"}`}
          onClick={() => setOpenIsOr(!openIsOR)}
        >
          {selectedIsOr ? selectedIsOr : "انتخاب کنید"}
          <BiChevronDown className="cursor-pointer" size={18} />
        </div>

        <ul
          className={`absolute  w-[102px] z-[1] ${
            openIsOR ? "max-h-[170px] opacity-100" : "max-h-0 opacity-0"
          } overflow-y-auto space-y-2 shadow-lg  bg-white text-right text-zinc-800 text-xs font-normal border-gray-200 rounded-lg`}
        >
          {isOrList.map((items) => (
            <div>
              <li
                key={items.title}
                className={`hover:bg-gray-100 mb-[2px] mt-1 rounded inline-flex flex-col-reverse pb-1 mr-2 h-5 ml-auto cursor-pointer ease-in-out transition-all select-none ${
                  items.title.startsWith(inputIsOr) ? "block" : "hidden"
                }`}
                onClick={() => {
                  if (items.title !== selectedIsOr) {
                    setSelectedIsOr(items.title);
                    setOpenIsOr(false);
                  }
                }}
              >
                {items.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TaskFilter;
