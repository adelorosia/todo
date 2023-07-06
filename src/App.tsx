import TaskItems from "./components/TaskItems"
import TopForm from "./components/TopForm"


const App = () => {
  return (
    <div className="w-full h-screen bg-pink-300 text-FOREGROUND flex justify-center items-center">
     <div className="w-fit h-fit py-3 px-8 bg-slate-800 rounded-xl ">
      <TopForm />
      <TaskItems />
     </div>
    </div>
  )
}

export default App
