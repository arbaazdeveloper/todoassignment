import React from 'react'
import Add from './Add'

const List = ({title}) => {
  return (
    <>
    <div className='list-title'>List : {title} </div>
    <Add type={'add'} description={'Add todo description'} title={'Add Todo'}/>
    <Add type={'list'} description={'Carrot imroves eye sight'} title={'Carrot'}/>
 
    </>
  )
}

export default List