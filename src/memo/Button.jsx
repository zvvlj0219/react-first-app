const Button = ({style,text,className,onAddTask}) =>{
  return (
    <button 
      style={style} 
      type="submit"//submit 
      className={className}
      onClick={onAddTask}
    >{text}</button>
  )
}

export default Button