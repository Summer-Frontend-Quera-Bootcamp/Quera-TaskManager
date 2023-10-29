import { useState } from "react";
import { ButtonIcon, ButtonNewTask } from "../UseFullButtons";
import { ColumnHeader, ContainerColTask, ContainerModal } from "../Containers";
import { NewTask } from "../NewTask";
import ModalInformation from "../CommentModal/InformationModal";

type TaskOptions = {
  task: boolean;
  comment: boolean;
};
const ColumnView = () => {
  const [taskOptions, setTaskOptions] = useState<TaskOptions>({
    task: false,
    comment: false,
  });
  return (
    <div className="flex flex-row-reverse h-[78vh] gap-x-l overflow-y-auto pr-4">
      {taskOptions.task && (
        <>
          <div className="fixed flex justify-center items-center top-[-250px] right-[-300px] w-[130vw] h-[130vh] bg-black opacity-30 z-10" />
          <div className="fixed top-[8%] right-[22%] z-20">
            <NewTask
              onClose={() => {
                setTaskOptions((prevState) => ({ ...prevState, task: false }));
              }}
            />
          </div>
        </>
      )}
      <div className="w-64">
        <ColumnHeader
          color="orange"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Open"
          count={2}
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3Igb3WiLyQWwE0yMYix3WUTBncjm-AuJXg&usqp=CAU"
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="important"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "سلام", color: "red" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="high"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "تگ جدید", color: "lime" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <div>
          <ButtonNewTask
            onClick={() => {
              setTaskOptions((prevState) => ({
                ...prevState,
                task: true,
              }));
            }}
          />
        </div>
      </div>
      <div className="w-64">
        <ColumnHeader
          color="blue"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="In Progress"
          count={3}
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="high"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "تگ جدید", color: "lime" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3Igb3WiLyQWwE0yMYix3WUTBncjm-AuJXg&usqp=CAU"
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="important"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "سلام", color: "red" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="high"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "تگ جدید", color: "lime" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <ButtonNewTask
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              task: !prevState.task,
            }));
          }}
        />
      </div>
      <div>
        <ColumnHeader
          color="yellow"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Pending"
          count={0}
        />
        <ButtonNewTask
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              task: true,
            }));
          }}
        />
      </div>
      <div className="w-64">
        <ColumnHeader
          color="green"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Done"
          count={2}
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="important"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "سلام", color: "red" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }));
          }}
        >
          <ContainerColTask
            listName="پروژه اول"
            taskTitle="ین یک تیتر برای این تسک است"
            priority="high"
            tags={[
              { title: "تگ", color: "brand" },
              { title: "تگ جدید", color: "lime" },
            ]}
            onMore={() => {}}
            onCheck={() => {}}
            taskStatus={{ allTasks: 15, tasksDone: 4 }}
            date="۵ -مهر "
          />
        </div>
        <ButtonNewTask
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              task: true,
            }));
          }}
        />
      </div>
      <div className=" absolute bottom-[50px] left-[50px]">
        <ButtonIcon
          useCase="newTask"
          onClick={() => {
            setTaskOptions((prevState) => ({
              ...prevState,
              task: true,
            }));
          }}
        ></ButtonIcon>
      </div>
      {taskOptions.comment && (
        <div className="z-10">
          <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
            <ContainerModal
              onClose={() => {
                setTaskOptions((prevState) => ({
                  ...prevState,
                  comment: !prevState.comment,
                }));
              }}
              width="w-[1400px]"
            >
              <ModalInformation />
            </ContainerModal>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnView;
