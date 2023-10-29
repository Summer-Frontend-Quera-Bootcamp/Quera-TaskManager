import ListViewProject from "../Project";
const ListView = () => {
  return (
    <div className="flex flex-col overflow-scroll overflow-x-hidden pe-s h-full gap-y-4">
      <ListViewProject projectName="Task Manager" />
    </div>
  );
};

export default ListView;
