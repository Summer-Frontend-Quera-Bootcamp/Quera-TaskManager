import React, { useState } from "react";
import { ProjectItems } from "./projectItems";
type workspaceitem ={
    title:String
    color:string

}
export const WorkSpaceItems=({title,color}:workspaceitem)=>{
    return(
        <div className="flex flex-col mt-[16px] gap-4">
        <div className="w-[274px] h-9 rounded text-right text-stone-900 font-medium flex flex-row-reverse items-center gap-2">
          <div className="w-5 h-5 rounded " style={{backgroundColor:color}}></div>
          {title}
        </div>
   
      </div>
    )
}
