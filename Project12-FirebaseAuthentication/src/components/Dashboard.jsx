import React from 'react'

function Dashboard(currentUserEmail) {
  return (
    <div>
      <h1>Welcome {currentUserEmail} !</h1>
      <button className='bg-red-600'>Logout</button>
    </div>
  )
}

export default Dashboard
