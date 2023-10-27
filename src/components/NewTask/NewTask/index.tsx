import Dropdown from "../../DropDown";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";
import { ButtonPrimary } from "../../UseFullButtons";
import { FlagSelecter, MinimalistDatePicker, TagSearch } from "..";
import { useClickAway } from "@uidotdev/usehooks";

type INewTaskProps = {
  onClose: () => void;
};

type TaskOptions = {
  show: boolean;
  priority: boolean;
  calendar: boolean;
  tagSearch: boolean;
};
const NewTask = ({ onClose }: INewTaskProps) => {
  const [taskOptions, setTaskOptions] = useState<TaskOptions>({
    show: true,
    priority: false,
    calendar: false,
    tagSearch: false,
  });
  const handleClose = () => {
    // setIsOpen(false);
    setTaskOptions((prevState) => ({ ...prevState, show: false }));
    onClose();
  };

  const ref = useClickAway<HTMLDivElement>(handleClose);

  return (
    <>
      {taskOptions.show && (
        <div
          ref={ref}
          className="w-[1000px] h-[600px] flex flex-col justify-between rounded-lg shadow-xl p-m relative bg-white"
        >
          <div className="flex flex-row-reverse items-center w-full">
            <RiCheckboxBlankFill size="20" className="ml-xs text-gray-300" />
            <h3 className="ml-auto text-heading-s font-bold">عنوان تسک</h3>
            <IoClose
              onClick={handleClose}
              size="22"
              className=" text-gray-300 cursor-pointer hover:text-gray-primary"
            />
          </div>

          <div className="flex flex-row-reverse items-center">
            <p className="ml-xs"> در </p>
            <div className="w-[150px] flex flex-col">
              <Dropdown
                options={[
                  { label: "hello", value: "hello" },
                  { label: "hello1", value: "hello1" },
                  { label: "hello2", value: "hello2" },
                ]}
              />
            </div>
            <p className="mx-xs"> برای </p>
            <span className="w-[35px] min-h-[35px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary">
              <FiUserPlus size="20" className="text-gray-300" />
            </span>
          </div>

          <textarea
            className="w-full h-[250px] border rounded-md p-s text-right flex"
            placeholder="توضیحاتی برای این تسک بنویسید"
          />

          <div className="flex flex-row-reverse items-center">
            <p className="ml-xs font-bold">افزودن پیوست </p>
            <label
              htmlFor="file-upload"
              className="flex flex-row items-center gap-xs border-2 border-brand-primary rounded px-xs py-[3px] font-bold"
            >
              آپلود فایل
              <BiLink size="20" className="text-brand-primary" />
            </label>
            <input id="file-upload" type="file" className="hidden" />
          </div>

          {taskOptions.priority && (
            <div className="absolute left-[830px] top-[430px] ">
              <FlagSelecter
                onData={() => {
                  setTaskOptions((prevState) => ({
                    ...prevState,
                    priority: false,
                  }));
                }}
              />
            </div>
          )}
          {taskOptions.calendar && (
            <div className="absolute left-[300px] top-[100px] ">
              <MinimalistDatePicker
                onData={() => {
                  setTaskOptions((prevState) => ({
                    ...prevState,
                    calendar: false,
                  }));
                }}
              />
            </div>
          )}
          {taskOptions.tagSearch && (
            <div className="absolute left-[830px] top-[430px] ">
              <TagSearch
                onData={() => {
                  setTaskOptions((prevState) => ({
                    ...prevState,
                    tagSearch: false,
                  }));
                }}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-row-reverse items-center">
            <div className="flex gap-xs ml-auto">
              <span
                onClick={() => {
                  setTaskOptions((prevState) => ({
                    ...prevState,
                    tagSearch: true,
                  }));
                }}
                className="w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary"
              >
                <BsTags size="25" className="text-gray-300" />
              </span>
              <span
                onClick={() => {
                  setTaskOptions((prevState) => ({
                    ...prevState,
                    calendar: true,
                  }));
                }}
                className="w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary"
              >
                <BsCalendar3 size="23" className="text-gray-300" />
              </span>
              <span
                className="w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary"
                onClick={() => {
                  setTaskOptions((prevState) => ({
                    ...prevState,
                    priority: true,
                  }));
                }}
              >
                <FiFlag size="25" className="text-gray-300" />
              </span>
            </div>
            <ButtonPrimary onClick={() => {}}> ساختن تسک </ButtonPrimary>
          </div>
        </div>
      )}
    </>
  );
};

export default NewTask;
