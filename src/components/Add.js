import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTask,setEdit } from '../feature/storeSlice';
import { setEditState } from '../feature/editSlice';
const Add = ({type,description,title,index,adress,listAdress}) => {
 const data=useSelector((state)=>state.list.value)
 const [input,setInputs]=useState({title:title,description:description})
  const dispatch=useDispatch()
  const addingTask=()=>{
    if(input.title==='Add Todo'){
      alert('plaese add todo title');
      return
    }
    if(input.description==='Add todo description'){
      alert('plaese add todo Description');
      return
    }
    const obj={index,title:input.title,description:input.description}
    dispatch(addTask(obj))
 
  }
 const onchangeHandle=(e)=>{
setInputs({...input,[e.target.name]:e.target.value})
 }
 const editingTask=()=>{
  const obj={adress,listAdress}
  dispatch(setEditState(obj))
 }
  return (
    <>
       <div className={`list-main-container ${type==='add'?'add-container':''}`}>
        <div>
    <div className='list-button-container'>
        <div className='add-todo'>
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5721" cy="12" r="12" fill="url(#paint0_linear_10_807)"/>
<path d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z" fill="white"/>
<path d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_10_807" x1="-11.4279" y1="12" x2="12.5721" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#BBB5E2"/>
<stop offset="1" stop-color="#9C92DF"/>
</linearGradient>
</defs>
</svg>
{type==='add'?<input className='listInput' name='title' value={input.title} onChange={(e)=>onchangeHandle(e)}/>:<h4>{title}</h4>}
</div>
<div className='editble-btn'>
<div className='editible-btn-container' onClick={type==='add'?addingTask:editingTask}>
  { type==='add'? <div  onClick={()=>addingTask}><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4939 5.34077V8.73452H0V5.34077H13.4939ZM8.59931 0V14.3322H4.9081V0H8.59931Z" fill="white"/>
</svg>
</div>:<div onClick={editingTask}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2189 0C12.8777 0 12.5365 0.130292 12.2761 0.390625L10.6667 2L14.0001 5.33333L15.6095 3.72396C16.1302 3.20329 16.1302 2.35921 15.6095 1.83854L14.1616 0.390625C13.9012 0.130292 13.56 0 13.2189 0ZM9.33341 3.33333L1.50652 11.1602C1.50652 11.1602 2.11837 11.1053 2.34637 11.3333C2.57437 11.5613 2.38669 13.0533 2.66669 13.3333C2.94669 13.6133 4.4293 13.4162 4.64196 13.6289C4.85463 13.8416 4.83988 14.4935 4.83988 14.4935L12.6668 6.66667L9.33341 3.33333ZM0.666672 13.3333L0.0377607 15.1146C0.013037 15.1849 0.000273226 15.2588 0 15.3333C0 15.5101 0.0702384 15.6797 0.195264 15.8047C0.320289 15.9298 0.489859 16 0.666672 16C0.741187 15.9997 0.815129 15.987 0.885424 15.9622C0.887598 15.9614 0.889768 15.9605 0.891934 15.9596L0.908861 15.9544L0.912768 15.9518L2.66669 15.3333L1.66668 14.3333L0.666672 13.3333Z" fill="#B0B1C8"/>
</svg></div>
}
</div>
</div>
</div>
{type==='add'?<input className='listInput' name='description' value={input.description} onChange={(e)=>onchangeHandle(e)}/>:<p>{description}</p>}
</div>
    </div>
    
    </>
  )
}

export default Add