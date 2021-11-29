const Button = ({color,text,onAddTask}) =>{
  return (
    <button 
      style={{backgroundColor:color}} 
      type="button"
      className='btn'
      onClick={onAddTask}
    >{text}</button>
  )
}

export default Button