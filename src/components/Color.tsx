import { useContext } from "react"
import { AppContext } from "../Context"

const Color = () => {
    const {changeColor}=useContext(AppContext)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 ">
      <span className="btn-color-style bg-RED" onClick={()=>{changeColor("bg-red-500")}}>Red</span>
      <span className="btn-color-style bg-blue-700" onClick={()=>{changeColor("bg-blue-500")}}>Blue</span>
      <span className="btn-color-style bg-YELLOW" onClick={()=>{changeColor("bg-yellow-500")}}>Yellow</span>
      <span className="btn-color-style bg-GREEN" onClick={()=>{changeColor("bg-green-500")}}>Green</span>
      <span className="btn-color-style bg-PURPLE" onClick={()=>{changeColor("bg-purple-500")}}>Purple</span>
      <span className="btn-color-style bg-PINK" onClick={()=>{changeColor("bg-pink-500")}}>pink</span>
    </div>
  )
}

export default Color
