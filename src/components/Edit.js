import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask } from '../feature/storeSlice'

const Edit = () => {
  const [state,setState]=useState({id:'',title:'',description:''})
  const editState=useSelector((state)=>state.editState.value)
  const dispatch=useDispatch()


  const edit=(e)=>{
    e.preventDefault()

    dispatch(editTask(state))
  }
  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})

  }
  useEffect(()=>{
    setState(editState)
  },[editState])
  return (
    <>
    <div className='edit-section'>
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.147257 4.72344L4.02377 0.519623L4.735 1.2909L1.71708 4.56362H10.5626C10.8407 4.56362 11.0656 4.80799 11.0656 5.10908C11.0656 5.41017 10.8407 5.65453 10.5626 5.65453H1.71708L4.735 8.92726L4.02377 9.69853L0.147257 5.49471C-0.049411 5.28144 -0.049411 4.93671 0.147257 4.72344Z" fill="white"/>
</svg>
   Edit Todo

   <form>
    <input className='edit-input' name='title' value={state.title} onChange={(e)=>handleChange(e)}></input>
    <textarea name='description' onChange={(e)=>handleChange(e)} className='edit-input' value={state.description}></textarea>
  <button onClick={(e)=>edit(e)}>Save</button>
   </form>
    </div>

    </>
  )
}

export default Edit