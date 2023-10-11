import React, { useState } from "react";

type ProjectItem = {
  title: String;
};
export const ProjectItems = ({ title }: ProjectItem) => {
  return (
    <div className=" pr-[6px] h-[36px] rounded flex flex-row-reverse items-center">
      {title}
    </div>
  );
};
