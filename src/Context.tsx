import React, { createContext, useState } from "react";

export interface ITask {
  id: number;
  name: string;
  done: boolean;
}

interface IApp {
  items: ITask[];
  setItems: React.Dispatch<React.SetStateAction<ITask[]>>;
  task: string;
  setTask: (task: string) => void;
  isButtonActive:boolean
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [items, setItems] = useState<ITask[]>([]);
  const [task, setTask] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(true);

  return (
    <AppContext.Provider
      value={{ items, setItems, task, setTask,isButtonActive,setIsButtonActive }}
    >
      {children}
    </AppContext.Provider>
  );
};
