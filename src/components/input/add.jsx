import './add.css'

function AddTask(){
  return(
    <div className='add-task'>
      <input className='inputt' type="text" placeholder='Add Task' />
      <button className='btn-add'>Add</button>
    </div>
  )
}

export default AddTask