import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";


import './todo.css'

function Todo(){
  return(
    <div className='todo'>
      <div className="text">
        <input className="checkbox" type="checkbox" name="" id="" />
        <p>Task1Task1Task1Task1Task1</p>
      </div>
      <div className="icons">
        <span className="edit">
          <MdOutlineModeEditOutline />
        </span>
        <span className="del-icon">
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  )
}
export default Todo