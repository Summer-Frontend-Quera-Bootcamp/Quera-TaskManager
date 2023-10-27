import { PropsWithChildren, Dispatch, SetStateAction } from "react";
export type INewWorkspace = {
  id: number;
  name: string;
  color: string;
  members: string[];
};

export type IModalsStatus = {
  nameModal: boolean;
  colorModal: boolean;
  dataModal: boolean;
  projectModal: boolean;
};
export interface IWorkspaceData extends INewWorkspace {
  projects?: [];
}
export interface ISiderBarMenu extends PropsWithChildren {
  workspaceData: IWorkspaceData[];
  filteredWorkspace: IWorkspaceData[];
  setFilteredWorkspace: Dispatch<SetStateAction<IWorkspaceData[]>>;
  setWorkspaceData: Dispatch<SetStateAction<IWorkspaceData[]>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
export interface IDisplayColorModal extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
export interface IDisplayNameModal extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
export interface IDisplayWorkspaceDataModalProps extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  addWorkspaceHandler: () => void;
}
export interface IDisplayProjectModal extends PropsWithChildren {
  displayModals: IModalsStatus;
  workspaceData: IWorkspaceData[];
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  setWorkspaceData: Dispatch<SetStateAction<IWorkspaceData[]>>;
}
export interface IRenderSelectButtonColor extends PropsWithChildren {
  data: INewWorkspace;
  setData: Dispatch<SetStateAction<INewWorkspace>>;
}

export interface IWorkspace extends PropsWithChildren {
  workspace: INewWorkspace;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
