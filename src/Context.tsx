import React, { createContext, useState } from "react";

export interface ITask {
  id: number;
  name: string;
  done: boolean;
}

export enum colorList {
  red = "red",
  pink = "pink",
  blue = "blue",
  green = "green",
  yellow = "yellow",
  purple = "purple",
}

interface IApp {
  items: ITask[];
  setItems: React.Dispatch<React.SetStateAction<ITask[]>>;
  task: string;
  setTask: (task: string) => void;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  isButtonActive:boolean
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
  changeColor:React.Dispatch<React.SetStateAction<any>>
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [items, setItems] = useState<ITask[]>([]);
  const [task, setTask] = useState("");
  const [color, setColor] = useState("bg-red-500");
  const [isButtonActive, setIsButtonActive] = useState(true);
  const changeColor=(giveColor:colorList)=>{
    switch(giveColor){
      case colorList.pink :
      setColor("bg-pink-500");
      console.log(color)
      break;
      case colorList.red :
      setColor("bg-red-500");
      console.log(color)
      break;
      case colorList.green :
      setColor("bg-green-500");
      console.log(color)
      break;
      case colorList.purple :
      setColor("bg-purple-500");
      console.log(color)
      break;
      case colorList.blue :
      setColor("bg-blue-500");
      console.log(color)
      break;
      case colorList.yellow :
      setColor("bg-yellow-500");
      console.log(color)
      break;
      default:
        break;
    }
  }
  return (
    <AppContext.Provider
      value={{ items, setItems, task, setTask,isButtonActive,setIsButtonActive,color,setColor,changeColor }}
    >
      {children}
    </AppContext.Provider>
  );
};
