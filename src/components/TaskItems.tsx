import React, { useContext } from "react";
import { AppContext } from "../Context";
import { BsCheckLg, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const TaskItems:React.FC = () => {
  const { items, setItems, task, setTask,isButtonActive,setIsButtonActive } =
    useContext(AppContext);

  const deleteTask = (idPerson: number) => {
    const newTask = items.filter((item) => item.id !== idPerson);
    setItems(newTask);
  };

  const editBooleanTask = (idPerson: number) => {
  const index= items.findIndex((item) => item.id === idPerson);
    console.log(index);
    const newTask = [...items];
    newTask[index].done = !newTask[index].done;
    setItems(newTask);
    setTask(newTask[index].name);
    setIsButtonActive(false)
  };

  const acceptEditTask = (idPerson: number) => {
    const index= items.findIndex((item) => item.id === idPerson);
    console.log(index);
   
      const newTask = [...items];
      newTask[index].name = task;
      newTask[index].done = !newTask[index].done;
      setItems(newTask);
      setTask("");
      setIsButtonActive(true)
  };

  return (
    <ul className="rounded-lg overflow-hidden">
      {items.map((item) => (
        <li className={`list-style ${
          item.done ? " bg-slate-200 text-slate-700" : "flex" 
        }`} key={item.id}>
          {`${item.name}`}
          <div className="flex items-center gap-4">
            <BsCheckLg
              className={`text-green-800 text-2xl font-bold hover:scale-110 cursor-pointer duration-500 ${
                item.done ? "flex" : "hidden"
              }`}
              onClick={() => {
                acceptEditTask(item.id);
              }}
            />
           
            <AiFillEdit
              className={`${isButtonActive?"visible":"pointer-events-none  text-black/25"} text-yellow-600 text-2xl font-bold hover:scale-110 cursor-pointer duration-500$ ${
                item.done ? "hidden" : "flex" 
              }`}
              
              onClick={() => {
                editBooleanTask(item.id);
              }}   />
        
            <BsFillTrashFill
              className={`${isButtonActive?"visible":"pointer-events-none"} text-red-800 text-2xl font-bold hover:scale-110 cursor-pointer duration-500`}
              onClick={() => {
                deleteTask(item.id);
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskItems;
