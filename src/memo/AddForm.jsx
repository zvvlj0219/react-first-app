import Button from "./Button";
import { useState } from "react";

const AddForm = ({onAddTask}) =>{

  //form text
  const [tasks,setTasks] = useState('');

  //form input
  const onFormChang = e =>{
    setTasks(e.target.value);
  }

  return (
    <form onSubmit={(e)=>onAddTask(e,tasks)}>
      <p>new memo</p>
      <input 
        text="text" 
        placeholder="new.." 
        value={tasks}
        onChange={onFormChang}
      />
      <Button  
        color='skyblue'    
        text='Add' 
        className="btn mx-3"
      />
    </form>
  )
}

export default AddForm