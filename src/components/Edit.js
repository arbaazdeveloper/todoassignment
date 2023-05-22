import React from 'react'

const Edit = () => {
  return (
    <>
    <div className='edit-section'>
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.147257 4.72344L4.02377 0.519623L4.735 1.2909L1.71708 4.56362H10.5626C10.8407 4.56362 11.0656 4.80799 11.0656 5.10908C11.0656 5.41017 10.8407 5.65453 10.5626 5.65453H1.71708L4.735 8.92726L4.02377 9.69853L0.147257 5.49471C-0.049411 5.28144 -0.049411 4.93671 0.147257 4.72344Z" fill="white"/>
</svg>
   Edit Todo

   <form>
    <input className='edit-input'></input>
    <textarea className='edit-input'></textarea>
  <button>Save</button>
   </form>
    </div>

    </>
  )
}

export default Edit