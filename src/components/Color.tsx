import { useContext } from "react"
import { AppContext } from "../Context"

const Color = () => {
    const {changeColor}=useContext(AppContext)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 ">
      <span className="btn-color-style bg-RED" onClick={()=>{changeColor("red")}}>Red</span>
      <span className="btn-color-style bg-blue-700" onClick={()=>{changeColor("blue")}}>Blue</span>
      <span className="btn-color-style bg-YELLOW" onClick={()=>{changeColor("yellow")}}>Yellow</span>
      <span className="btn-color-style bg-GREEN" onClick={()=>{changeColor("green")}}>Green</span>
      <span className="btn-color-style bg-PURPLE" onClick={()=>{changeColor("purple")}}>Purple</span>
      <span className="btn-color-style bg-PINK" onClick={()=>{changeColor("pink")}}>pink</span>
    </div>
  )
}

export default Color
