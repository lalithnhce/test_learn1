import React from 'react'
import { SendIcon } from 'lucide-react'

function Button() {
  return (
    <div className='w-25 bg-slate-100 py-5 border-2 border-black flex gap-3 items-center text-slate-800 hover:bg-amber-500 transition-all cursor-pointer hover:text-blue-500'>
      <div>
        <SendIcon />
      </div>
      <div>
        Send
      </div>
    </div>
  )
}

export default Button