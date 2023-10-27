import { MdOutlineColorLens } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { useState, useRef } from "react";

type ITagEdit = {
  onEdit: (text: string) => void;
  onColor: (
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
      | "orange"
  ) => void;
  onDelete: () => void;
};

type DisplayOptions = {
  showColor: boolean;
  showText: boolean;
  showTag: boolean;
};
export const TagEdit = ({ onDelete, onColor, onEdit }: ITagEdit) => {
  const [displayOptions, setDisplayOptions] = useState<DisplayOptions>({
    showColor: false,
    showText: false,
    showTag: true,
  });

  const text = useRef<HTMLInputElement>(null);
  return (
    displayOptions.showTag && (
      <div className="bg-gray-secondary w-[130px] absolute rounded-md left-[60px] top-[100px] shadow-2xl z-10">
        {displayOptions.showText && (
          <div className="flex flex-col p-xs">
            <input
              ref={text}
              className="border-2 border-gray-darker px-xs text-right"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (text.current !== null) {
                    onEdit(text.current.value);
                  }

                  setDisplayOptions((prevState) => ({
                    ...prevState,
                    showTag: false,
                  }));
                }
              }}
              autoFocus
            />
          </div>
        )}
        {displayOptions.showColor && (
          <div className="flex flex-row-reverse flex-wrap gap-xs p-xs">
            <span
              onClick={() => {
                onColor("yellow");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-yellow-primary"
            />
            <span
              onClick={() => {
                onColor("orange");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-orange-primary"
            />
            <span
              onClick={() => {
                onColor("red");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-red-primary"
            />
            <span
              onClick={() => {
                onColor("pink");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-pink-primary"
            />
            <span
              onClick={() => {
                onColor("grape");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-grape-primary"
            />
            <span
              onClick={() => {
                onColor("violet");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-violet-primary"
            />
            <span
              onClick={() => {
                onColor("indigo");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-indigo-primary"
            />
            <span
              onClick={() => {
                onColor("blue");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-blue-primary"
            />
            <span
              onClick={() => {
                onColor("cyan");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-cyan-primary"
            />
            <span
              onClick={() => {
                onColor("teal");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-teal-primary"
            />
            <span
              onClick={() => {
                onColor("brand");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-brand-primary"
            />
            <span
              onClick={() => {
                onColor("green");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-green-primary"
            />
            <span
              onClick={() => {
                onColor("lime");
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-lime-primary"
            />
          </div>
        )}
        {!displayOptions.showColor && !displayOptions.showText && (
          <div className="h-[100px] text-right text-sm flex flex-col ">
            <button
              onClick={() => {
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showText: true,
                }));
              }}
              className="flex flex-row-reverse items-center gap-xs w-full rounded-tr-md rounded-tl-md h-1/3 hover:bg-gray-300 px-xs"
            >
              <FiEdit size="19" /> ویرایش تگ
            </button>
            <button
              onClick={() => {
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showColor: true,
                }));
              }}
              className="flex flex-row-reverse items-center gap-xs w-full h-1/3 hover:bg-gray-300 px-xs"
            >
              <MdOutlineColorLens size="23" /> ویرایش رنگ
            </button>
            <button
              onClick={() => {
                onDelete();
                setDisplayOptions((prevState) => ({
                  ...prevState,
                  showTag: false,
                }));
              }}
              className="flex flex-row-reverse items-center gap-xs w-full rounded-bl-md rounded-br-md h-1/3 hover:bg-gray-300 hover:text-red-primary px-xs"
            >
              <GoTrash size="19" />
              حذف تگ
            </button>
          </div>
        )}
      </div>
    )
  );
};
