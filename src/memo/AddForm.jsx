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
    <form className="my-3" onSubmit={(e)=>onAddTask(e,tasks)}>
      <p>new memo</p>
      <input 
        text="text" 
        placeholder="new.." 
        value={tasks}
        onChange={onFormChang}
      />
      <Button  
        text='Add' 
        style={{backgroundColor:'skyblue',width:'100px'}}
        className="btn mx-3"
      />
    </form>
  )
}

export default AddForm