import { PropsWithChildren } from "react";
import DashboardButton from "../Button";

interface IWorkspace extends PropsWithChildren {
  workspaceName: string;
  workspaceColor: string;
  projects: projectType[];
}
type projectType = {
  id: number;
  projectName: string;
  icon: boolean;
};
const DashboardWorkspace: React.FC<IWorkspace> = ({
  workspaceName,
  projects,
  workspaceColor,
}): JSX.Element => {
  return (
    <div className="flex flex-col row-span-4 items-end gap-m border-bottom border-slate-200">
      <h2 className="font-extrabold text-gray-darker text-xl">
        {workspaceName}
      </h2>
      <div className="flex-row-reverse flex flex-wrap gap-m border-bottom border-b-2 w-full pb-m">
        {projects.map((project) => (
          <DashboardButton
            key={project.id}
            projectName={project.projectName}
            icon={project.icon}
            color={workspaceColor}
            classes={`rounded-2xl shadow-sm w-48 h-20 `}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardWorkspace;
