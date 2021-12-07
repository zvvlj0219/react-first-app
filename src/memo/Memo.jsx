const Memo = ({memos,onDelete}) =>{
  return (
    <div>
      {
        memos.map(memo =>
          (
            <div 
              className="memo" 
              key={memo.id}
              onDoubleClick={()=>onDelete(memo.id)}
            >
              <p>id : {memo.id}</p>
              <p>text : {memo.text}</p>
            </div>
          )
        )
      }
    </div>
  )
}

export default Memo