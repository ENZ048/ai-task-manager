import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='min-h-[96vh] bg-gray-200 w-70 flex flex-col pt-10 items-center gap-10'>
      <Link to='/'><div className='sidebar-nav-item w-3/4 bg-white rounded p-2 text-center'>
        <h1>Home</h1>
      </div></Link>

      <Link to='/tasklist'><div className='sidebar-nav-item w-3/4 bg-white rounded p-2 text-center'>
        <h1>TaskList</h1>
      </div></Link>

      <Link to='/ai-recommendations'><div className='sidebar-nav-item w-3/4 bg-white rounded p-2 text-center'>
        <h1>AI Features</h1>
      </div></Link>
    </div>
  )
}
