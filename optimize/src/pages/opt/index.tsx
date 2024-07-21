import React from 'react'
import Render from './components/render'

export default function Opt() {
  const [reCount, setReCount] = React.useState(0)
  return (
    <div>
      <form action="">
        <input type="text" value={reCount} onChange={(e) =>  setReCount(e?.target?.value ? Number(e?.target?.value) : 0)}/>
        {/* <button>render</button> */}
      </form>
      <div>
      {reCount && <Render count={reCount} updateCount={setReCount} />}
      </div>
    </div>
  )
}
