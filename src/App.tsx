import { useContext } from "react";
import Color from "./components/Color";
import TaskItems from "./components/TaskItems";
import TopForm from "./components/TopForm";
import { AppContext } from "./Context";

const App = () => {
  const { color } = useContext(AppContext);
  return (
    <div
      className={`w-full h-screen text-FOREGROUND flex flex-col justify-center items-center ${color}`}
    >
      <Color />
      <div className="w-fit h-fit py-3 px-8 rounded-xl container mx-3 bg-slate-800 bg-pu">
        <TopForm />
        <TaskItems />
      </div>
    </div>
  );
};

export default App;
