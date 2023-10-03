// ========== import needed packages ==========
import React, { useState, useEffect } from "react";

interface BorderProps {
  width: number;
  right: number;
}

const NavBorder: React.FC<BorderProps> = ({ width, right }) => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBorder(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div
      className={`h-0 origin-top rotate-180 border-[#208D8E] border-2 absolute transition-all duration-500 ${
        showBorder ? "opacity-100" : "opacity-0"
      }`}
      style={{ width: `${width}px`, right: `${right}px` }}
    ></div>
  );
};

export default NavBorder;
