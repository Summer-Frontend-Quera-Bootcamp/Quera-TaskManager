import SideBarSection from "../../SideBar/SideBarSection";
import DashboardWorkspace from "../Workspace";

const Dashboard = (): JSX.Element => {
  const workspaces = [
    {
      id: 1,
      name: "درس کامپایلر",
      color: "lime",
      projects: [
        {
          id: 1,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 2,
          projectName: "پروژه دوم ",
          icon: false,
        },
        {
          id: 3,
          projectName: "پروژه سوم ",
          icon: false,
        },
      ],
    },
    {
      id: 2,
      name: "LeftCoders",
      color: "yellow",
      projects: [
        {
          id: 1,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 2,
          projectName: "پروژه دوم ",
          icon: false,
        },
        {
          id: 3,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 4,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 5,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 6,
          projectName: "ساختن پروژه جدید",
          icon: false,
        },
        {
          id: 7,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 8,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 9,
          projectName: "پروژه اول ",
          icon: true,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-4 ">
      <div className="grid col-span-3  pt-s ps-xl h-screen me-s">
        {workspaces.map((workspace) => (
          <DashboardWorkspace
            key={workspace.id}
            projects={workspace.projects}
            workspaceName={workspace.name}
            workspaceColor={workspace.color}
          />
        ))}
      </div>
      <SideBarSection />
    </div>
  );
};

export default Dashboard;
