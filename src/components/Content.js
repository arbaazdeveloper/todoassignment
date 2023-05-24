import React, { useState } from 'react'
import List from './List'
import { useSelector, useDispatch } from 'react-redux';
import { list } from '../feature/storeSlice';
const Content = () => {
    const dispatch = useDispatch();
    const [input ,setinput]=useState('')
    const listItem=useSelector((state)=>state.list.value)

    const addList=()=>{
       dispatch(list(input))
       console.log(listItem)

    }
    const handleInput=(e)=>{
        setinput(e.target.value)
        console.log(input)
    }
  return (
    <>
    <div className='content-display'>
    <div className='list-display'>
        {
        listItem.map((item,index)=>{
            return<> <List title={item.name} index={index} /></>
        })}
    </div>
    <div>
    <div className='list-title add-list-btn'>
    <input className='inputStyle' placeholder='Add Todo' onChange={(e)=>handleInput(e)} value={input}/>
    <div className='editible-btn-container' onClick={addList}>
   <div><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4939 5.34077V8.73452H0V5.34077H13.4939ZM8.59931 0V14.3322H4.9081V0H8.59931Z" fill="white"/>
</svg>
</div>
    </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Content