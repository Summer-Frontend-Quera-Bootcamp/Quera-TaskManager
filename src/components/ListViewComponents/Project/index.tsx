import { PiCaretCircleDown } from "react-icons/pi";
import List from "../List";
import { PropsWithChildren, useState } from "react";
import { NewTask } from "../../NewTask";
import { ButtonIcon } from "../../UseFullButtons";

interface IListViewProject extends PropsWithChildren {
  projectName: string;
}
type TaskListStatus = {
  task: boolean;
  list: boolean;
};

const ListViewProject: React.FC<IListViewProject> = ({ projectName }) => {
  const [taskListStatus, setTaskListStatus] = useState<TaskListStatus>({
    task: false,
    list: false,
  });
  return (
    <div
      className={`flex flex-col w-full  my-m items-end transition-all duration-300 ${
        !taskListStatus.list ? "h-0" : "h-max"
      }`}
    >
      {taskListStatus.task && (
        <>
          <div className="fixed flex justify-center items-center top-[-250px] right-[-300px] w-[130vw] h-[130vh] bg-black opacity-30 z-10" />
          <div className="fixed top-[8%] right-[22%] z-20">
            <NewTask
              onClose={() => {
                setTaskListStatus((prevState) => ({
                  ...prevState,
                  task: !prevState.task,
                }));
              }}
            />
          </div>
        </>
      )}
      <div className="flex gap-xs items-center ">
        <h2 className="text-heading-xs font-extrabold">{projectName}</h2>
        <button
          className={`text-2xl transition duration-300 ${
            taskListStatus.list ? "rotate-0" : "rotate-90"
          }`}
          onClick={() => {
            setTaskListStatus((prevState) => ({
              ...prevState,
              list: !prevState.list,
            }));
          }}
        >
          <PiCaretCircleDown />
        </button>
      </div>
      <div
        className={`flex flex-col w-full gap-y-14 px-m mt-l transition-all ease-in-out duration-300 ${
          taskListStatus.list ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <List listColor="pink" listStatus="Pending" />
        <List listColor="orange" listStatus="In Progress" />
        <List listColor="green" listStatus="Done" />
      </div>
      <div className=" absolute bottom-[50px] left-[50px]">
        <ButtonIcon
          useCase="newTask"
          onClick={() => {
            setTaskListStatus((prevState) => ({
              ...prevState,
              task: !prevState.task,
            }));
          }}
        ></ButtonIcon>
      </div>
    </div>
  );
};

export default ListViewProject;
