import React, { useEffect } from 'react'
import Add from './Add'
import { useSelector } from 'react-redux'
const List = ({title,index}) => {
  const todos=useSelector((state)=>state.list.value)
  const getList=()=>{
 
  }
  useEffect(()=>{
    getList()
  },[todos])
  return (
    <>
    <div>
    <div className='list-title'>List : {title} </div>
    <Add index={index} type={'add'} description={'Add todo description'} title={'Add Todo'}/>
{todos.map((item,adress)=>{
  return item.todo.map((element,listAdress)=>{
    return<>{index===adress?<Add type={'list'} adress={adress} listAdress={listAdress} description={element.description} title={element.title}/>:''}</>
  })
})}
  </div>
    </>
  )
}

export default List