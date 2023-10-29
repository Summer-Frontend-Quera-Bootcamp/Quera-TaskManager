import { PropsWithChildren } from "react";
import SideBarSection from "../../Components/SideBar/SideBarSection";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar";

interface IBoardLayout extends PropsWithChildren {}
const BoardLayout: React.FC<IBoardLayout> = (): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-rows-6  gap-s pt-l ps-xl h-screen me-s">
          <NavBar />
          <div
            className={`w-full row-span-5 h-full gap-[10px] ${
              pathname === "/boards/calendarView" && "mt-4"
            }  `}
          >
            <Outlet />
          </div>
        </div>
        <div>
          <SideBarSection />
        </div>
      </div>
    </>
  );
};

export default BoardLayout;
