import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

import { FaPlus } from "react-icons/fa6";
import { TfiMoreAlt } from "react-icons/tfi";
import { FiEdit } from "react-icons/fi";
import { PiArchiveTray } from "react-icons/pi";
import { GoTrash } from "react-icons/go";

type IColumnHeader = {
  color:
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "brand"
    | "green"
    | "yellow"
    | "lime"
    | "orange";
  name: string;
  count: number;
  onAdd: () => void;
  onEdit: () => void;
  onArchive: () => void;
  onDelete: () => void;
};

export const ColumnHeader = ({
  color,
  name,
  count,
  onAdd,
  onArchive,
  onDelete,
  onEdit,
}: IColumnHeader) => {
  const [moreDisplay, setMoreDisplay] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setMoreDisplay(false);
    },
  });

  return (
    <>
      <div className="w-[250px] h-[50px] mb-[10px] mt-6">
        <div
          ref={ref}
          className={`
      ${color === "red" && "bg-red-primary"}
      ${color === "pink" && "bg-pink-primary"}
      ${color === "grape" && "bg-grape-primary"}
      ${color === "violet" && "bg-violet-primary"}
      ${color === "indigo" && "bg-indigo-primary"}
      ${color === "blue" && "bg-blue-primary"}
      ${color === "cyan" && "bg-cyan-primary"}
      ${color === "teal" && "bg-teal-primary"}
      ${color === "yellow" && "bg-yellow-primary"}
      ${color === "brand" && "bg-brand-primary"}
      ${color === "green" && "bg-green-primary"}
      ${color === "lime" && "bg-lime-primary"}
      ${color === "orange" && "bg-orange-primary"} 
      w-full h-[44px] relative bg-blue-primary pt-[4px] rounded-2xl shadow-xl`}
        >
          <div className="group ease-in-out duration-300 w-full h-[44px] bg-white rounded-2xl flex flex-row items-center justify-between px-s">
            <div className="group-hover:opacity-100 opacity-0 flex flex-row-reverse gap-xs text-gray-darker relative transition-opacity duration-500 ease-in-out">
              <TfiMoreAlt
                onClick={() => {
                  setMoreDisplay(true);
                }}
                className="cursor-pointer"
              />
              <span className="group/plus">
                <FaPlus id="plus" onClick={onAdd} className="cursor-pointer" />
                <span
                  id="context"
                  className="group-hover/plus:opacity-100 w-[100px] text-sm text-white p-xs rounded-xl bg-gray-darker absolute bottom-s -right-s opacity-0 transition-opacity duration-500 ease-in-out delay-500"
                >
                  افزودن تسک
                </span>
              </span>
            </div>
            <div className="flex gap-xs ml-auto">
              <span className="bg-gray-secondary text-lg px-xs rounded-full">
                {count}
              </span>
              <p className="font-bold text-lg">{name}</p>
            </div>
          </div>
          {moreDisplay && (
            <div className="bg-gray-secondary w-[160px] h-[150px] absolute rounded-md top-[15px] shadow-xl text-right text-sm flex flex-col ">
              <button
                onClick={onEdit}
                className="flex flex-row-reverse items-center gap-xs w-full rounded-tr-md rounded-tl-md h-1/4 hover:bg-gray-300 hover:text-orange-primary px-xs"
              >
                <FiEdit size="19" /> ویرایش نام ستون
              </button>
              <button
                onClick={onAdd}
                className="flex flex-row-reverse items-center gap-xs w-full h-1/4 hover:bg-gray-300 hover:text-green-primary px-xs"
              >
                <FaPlus size="16" className="pr-[4px]" /> افزودن تسک
              </button>
              <button
                onClick={onArchive}
                className="flex flex-row-reverse items-center gap-xs w-full h-1/4 hover:bg-gray-300 hover:text-blue-primary px-xs"
              >
                <PiArchiveTray size="20" />
                آرشیو تمام تسک‌ها
              </button>
              <button
                onClick={onDelete}
                className="flex flex-row-reverse  items-center gap-xs w-full rounded-bl-md rounded-br-md h-1/4 hover:bg-gray-300 hover:text-red-primary px-xs"
              >
                <GoTrash size="19" />
                حذف ستون
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
