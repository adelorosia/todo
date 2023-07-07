import React, { createContext, useState } from "react";

export interface ITask {
  id: number;
  name: string;
  done: boolean;
}
type Color = "bg-red-500" | "bg-pink-500" | "bg-blue-500" | "bg-green-500" | "bg-yellow-500" | "bg-purple-500";


interface IApp {
  items: ITask[];
  setItems: React.Dispatch<React.SetStateAction<ITask[]>>;
  task: string;
  setTask: (task: string) => void;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
  isButtonActive:boolean
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
  changeColor:React.Dispatch<React.SetStateAction<Color>>
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [items, setItems] = useState<ITask[]>([]);
  const [task, setTask] = useState("");
  const [color, setColor] = useState<Color>("bg-red-500");
  const [isButtonActive, setIsButtonActive] = useState(true);
  const changeColor:React.Dispatch<React.SetStateAction<Color>>=(getColor)=>{
    setColor(getColor)
    console.log(color)
  }
  return (
    <AppContext.Provider
      value={{ items, setItems, task, setTask,isButtonActive,setIsButtonActive,color,setColor,changeColor }}
    >
      {children}
    </AppContext.Provider>
  );
};
