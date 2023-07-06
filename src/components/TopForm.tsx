import React, { useContext } from "react";
import { AppContext } from '../Context';



const TopForm = () => {
 
 
 
  const { items, setItems,task,setTask,isButtonActive } = useContext(AppContext);
  const getTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const sendItems = () => {
    if (task != "") {
      setItems([...items, { id: Math.floor(Math.random() * 1000000) + 1, name: task, done: false }]);
      setTask("");
    
    } else return;
  };
  return (
    <div className="mb-4">
      <h1 className="text-center m-4 text-xl font-bold">
        Welcome To Todo List
      </h1>
      <div className="bg-white rounded-lg flex justify-between">
        <input
          className=" py-2 outline-none rounded-l-lg text-slate-800 px-5 w-4/6"
          placeholder="Schreib dein Task"
          type="text"
          value={task}
          onChange={getTask}
        />
        <button
          className={` bg-slate-500 py-2 rounded-r-lg px-8 cursor-pointer ${isButtonActive?"visible":"pointer-events-none backdrop-blur-md bg-slate-300 text-black/25"}`}
          onClick={sendItems}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default TopForm;
