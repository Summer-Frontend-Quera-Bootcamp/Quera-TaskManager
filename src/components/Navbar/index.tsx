import { CiCircleList } from "react-icons/ci";
import {
  MdOutlineViewQuilt,
  MdDateRange,
  MdOutlineRestore,
} from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { LiaFilterSolid } from "react-icons/lia";
import { useState } from "react";
import FilterModal from "../FilterView/Modal";
import ShareProjectModal from "./Modals/ShareProjectModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

type PageOptions = {
  filterModal: boolean;
  shareModal: boolean;
  calenderFlag: boolean;
};
const NavBar = () => {
  const [pageOptions, setPageOptions] = useState<PageOptions>({
    filterModal: false,
    shareModal: false,
    calenderFlag: false,
  });
  const [chosen, setChosen] = useState<string[]>([]);
  const [userPermission, setUserPermission] = useState(3);

  const closeFilterModal = (attributes: string[]) => {
    setPageOptions((prevState) => ({ ...prevState, filterModal: false }));
    setChosen(attributes);
  };

  const closeShareModal = (permissionId: number) => {
    setUserPermission(permissionId);
    setPageOptions((prevState) => ({ ...prevState, shareModal: false }));
  };

  return (
    <div className="gird border-cyan-600">
      <div className="flex flex-row-reverse gap-x-s py-4 border-b-[1px]">
        <h1 className="pl-4 border-l-[2px] font-extrabold">پروژه اول</h1>
        <NavLink
          to="/boards/listView"
          className={({ isActive }) =>
            isActive ? "text-cyan-primary font-extrabold" : ""
          }
        >
          <button
            className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px]"
            onClick={() => {
              setPageOptions((prevState) => ({
                ...prevState,
                calenderFlag: false,
              }));
            }}
          >
            <CiCircleList />
            نمایش لیستی
          </button>
        </NavLink>
        <NavLink
          to="/boards/columnView"
          className={({ isActive }) =>
            isActive ? "text-cyan-primary font-extrabold" : ""
          }
        >
          <button
            className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px]"
            onClick={() => {
              setPageOptions((prevState) => ({
                ...prevState,
                calenderFlag: false,
              }));
            }}
          >
            <MdOutlineViewQuilt />
            نمایش ستونی
          </button>
        </NavLink>
        <NavLink
          to="/boards/calendarView"
          className={({ isActive }) =>
            isActive ? "text-cyan-primary font-extrabold" : ""
          }
        >
          <button
            className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px]"
            onClick={() => {
              setPageOptions((prevState) => ({
                ...prevState,
                calenderFlag: true,
              }));
            }}
          >
            <MdDateRange />
            تقویم
          </button>
        </NavLink>
        <button
          className="flex flex-row-reverse gap-x-xs items-center mr-auto  hover:text-cyan-primary hover:font-extrabold"
          onClick={() => {
            setPageOptions((prevState) => ({ ...prevState, shareModal: true }));
          }}
        >
          <BiShareAlt />
          اشتراک گذاری
        </button>

        {pageOptions.shareModal && (
          <div className="fixed inset-0 z-10 bg-gray-darker bg-opacity-50">
            <ShareProjectModal
              onClose={(permissionId) => {
                closeShareModal(permissionId);
              }}
              userPermission={userPermission}
            />
          </div>
        )}
      </div>
      <div className="flex flex-row-reverse py-4 items-center border-b-[1px]">
        <div className="flex flex-row-reverse gap-x-xs items-center border-l-[2px] pl-4">
          <BsSearch />
          <input
            placeholder="جستجو در بین تسک ها"
            className=" text-xs text-right"
          ></input>
        </div>
        {!pageOptions.calenderFlag ? (
          <>
            <button
              className="flex flex-row-reverse gap-x-xs items-center hover:text-cyan-primary hover:font-extrabold pr-4 pl-4"
              onClick={() => {
                setPageOptions((prevState) => ({
                  ...prevState,
                  filterModal: true,
                }));
              }}
            >
              <LiaFilterSolid />
              فیلتر ها
            </button>

            {pageOptions.filterModal && (
              <div className="fixed inset-0 z-10 bg-gray-darker bg-opacity-50">
                <FilterModal
                  onClose={(attributes) => {
                    closeFilterModal(attributes);
                  }}
                />
              </div>
            )}
            <p className="bg-cyan-secondary text-cyan-primary px-2 py-1 text-xs">
              دسته بندی شده با {chosen.join(" و ")}
            </p>
            <button
              className="flex flex-row-reverse gap-x-xs items-center mr-auto px-[8px] py-[4px] border border-cyan-primary text-[13px] rounded-[8px]"
              onClick={() => {}}
            >
              <MdOutlineRestore />
              بازگردانی تسک های آرشیو شده
            </button>
          </>
        ) : (
          <div className="flex flex-row-reverse items-center gap-xs mr-[10px]">
            <span>امروز</span>
            <IoIosArrowForward className="cursor-pointer" onClick={() => {}} />
            <IoIosArrowBack className="cursor-pointer" onClick={() => {}} />
            <span>اردیبهشت 1402</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
