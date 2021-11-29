const Button = ({color,text,className,onAddTask}) =>{
  return (
    <button 
      style={{backgroundColor:color}} 
      type="submit"//submit 
      className={className}
      onClick={onAddTask}
    >{text}</button>
  )
}

export default Button