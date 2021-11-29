import Button from "./Button";
import { useState } from "react";

const AddForm = () =>{

  //form text
  const [tasks,setTasks] = useState('');

  //form input
  const onFormChang = e =>{
    setTasks(e.target.value);
  }
  const onAddTask = () =>{
    console.log(tasks)
  }

  return (
    <div>
      <p>new memo</p>
      <input 
        text="text" 
        placeholder="new.." 
        value={tasks}
        onChange={onFormChang}
      />
      <Button         
        color='green' 
        text='Add' 
        onAddTask={onAddTask}
      />
    </div>
  )
}

export default AddForm