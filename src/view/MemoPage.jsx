import Memo from '../memo/Memo'
import AddForm from '../memo/AddForm'
import {useState} from 'react'

function MemoPage() {
  //memo data
  const [memos,setMemos] = useState([
    {
      id:1,
      text:'sony',
    },
    {
      id:2,
      text:'bose',
    }
  ])

  const onAddTask = (e,task) =>{
    e.preventDefault()
    let id = memos.length + 1;
    let data = [
      ...memos,
      {
        id:id,
        text:task
      }
    ]
    setMemos(data)
  }

  const onDelete = id =>{
    let data = memos.filter(memo=>{
      return id !== memo.id
    })
    setMemos(data)
  }

  return (
    <div>
      <h4>.Memo</h4>
      <div className="alert alert-primary pb-0">
        <AddForm onAddTask={onAddTask}/>
      </div>
      <Memo 
        memos={memos} 
        onDelete={onDelete}
      />
    </div>
  )
}

export default MemoPage;
