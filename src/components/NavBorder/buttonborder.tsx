import * as React from "react";

interface BorderProps {
  width: number;
  right:number;
}

const NavBorder: React.FC<BorderProps> = ({ width,right}) => {
  return (
    <div
      className="h-[0px] origin-top rotate-180 border-[#208D8E] border-2 absolute"
      style={{ width: `${width}px` , right: `${right}px`}}
    ></div>
  );
};

export default NavBorder;
