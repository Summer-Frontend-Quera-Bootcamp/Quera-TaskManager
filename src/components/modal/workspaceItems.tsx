import React, { useState } from "react";
import { ProjectItems } from "./projectItems";
import { NewProject } from "./newproject";

type workspaceitem = {
  title: String;
  color: string;
};
export const WorkSpaceItems = ({ title, color }: workspaceitem) => {
  const [projectList, setProjectList] = useState<
    { id: number; title: string }[]
  >([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const handleClick = (index: number) =>
    clickedIndex === index ? null : setClickedIndex(index);
  const handleCreateProject = (formData: any) => {
    const { title } = formData;
    if (title.trim() !== "") {
      const newProjectItem = {
        id: projectList.length + 1,
        title: title,
      };

      setProjectList([...projectList, newProjectItem]);
    }
  };

  return (
    <div className="flex flex-col mt-[16px] gap-4">
      <div className="w-[274px] h-9 rounded text-right text-stone-900 font-medium flex flex-row-reverse items-center gap-2">
        <div
          className="w-5 h-5 rounded "
          style={{ backgroundColor: color }}
        ></div>
        {title}
      </div>
      <div className="rounded mr-4" >
        {projectList.map((project) => (
          <>
            <ProjectItems key={project.id} title={project.title} />
          </>
        ))}
      </div>
      <NewProject onSubmit={handleCreateProject} />
    </div>
  );
};
