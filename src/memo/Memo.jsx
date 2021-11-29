const Memo = ({memos}) =>{
  return (
    <div>
      {
        memos.map(memo =>(
          <div key={memo.id}>
            <p>id : {memo.id}</p>
            <p>text : {memo.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Memo