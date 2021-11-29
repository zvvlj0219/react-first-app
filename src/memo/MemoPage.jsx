import Memo from './Memo'
import AddForm from './AddForm'
import {useState} from 'react'

function MemoPage() {
  //memo data
  const [memos] = useState([
    {
      id:1,
      text:'sony',
    },
    {
      id:2,
      text:'bose',
    }
  ])

  return (
    <div>
      <div className="alert alert-primary pb-0">
        <AddForm memos={memos} />
      </div>
      <Memo memos={memos} />
    </div>
  )
}

export default MemoPage;
