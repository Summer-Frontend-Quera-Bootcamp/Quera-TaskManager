import * as React from "react";
import SvgSearch from "../iconComponents/serachicon";
function NavBoxSearch (){
    return(
        <div className="flex items-center gap-0 absolute right-0">
        <input
          type="search"
          className="block text-right text-neutral-400 text-xs font-normal bg-transparent border-none outline-none w-[200px] h-6 -mr-2 mt-[20px] mb-[18px] "
          placeholder="جستجو بین تسک ها"
        />
         
        <SvgSearch marginTop={18.5} marginBottom={18.5} />
      </div>
    )
}
export default NavBoxSearch