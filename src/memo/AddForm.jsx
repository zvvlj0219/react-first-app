import { useState , useCallback } from "react";
import SubmitButton from '../components/SubmitButton'

const AddForm = ({onAddTask}) =>{

  //form text
  const [input,setInput] = useState('');

  //form input
  const handleChange = useCallback(e =>{
    setInput(e.target.value)
  },[setInput])

  return (
    <form className="addform" onSubmit={(e)=>onAddTask(e,input)}>
      <p>new memo</p>
      <input 
        type="text" 
        placeholder="new.." 
        value={input}
        onChange={handleChange}
      />
      <SubmitButton  
        text='Add' 
        className='submitbutton'
      />
    </form>
  )
}

export default AddForm