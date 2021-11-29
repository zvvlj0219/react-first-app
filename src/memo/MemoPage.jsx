import Memo from './Memo'
import AddForm from './AddForm'
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

  return (
    <div>
      <div className="alert alert-primary pb-0">
        <AddForm onAddTask={onAddTask}/>
      </div>
      <Memo memos={memos} />
    </div>
  )
}

export default MemoPage;
