import './error.css'
import React from 'react'
import { Link } from 'react-router-dom';


function Error() {
  return (
    <div className='error'>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/" className="custom-link">Back to home page</Link>
    </div>
  )
}

export default Error