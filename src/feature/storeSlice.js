import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch,useSelector } from 'react-redux';
import { setEditState } from './editSlice';
const storeSlice = createSlice({
  name: 'list',
  initialState: {value:[]},
  reducers: {
   list:(state,action)=>{
    const id = uuidv4();
    const list={
        id:id,
        name:action.payload,
        todo:[]

    }
    state.value.push(list)
    let jsonArrayOfObjects = JSON.stringify(state.value);
    localStorage.setItem('todoList',jsonArrayOfObjects)
    
   },
   addTask:(state,action)=>{
    const {index,description,title}=action.payload
    const task={
      id:uuidv4(),
      title:title,
      description:description
    }
    const current=state.value[index]
    current.todo.push(task)
    let jsonArrayOfObjects = JSON.stringify(state.value);
    localStorage.setItem('todoList',jsonArrayOfObjects)
    alert('Task Added')

   },
   updateSate:(state)=>{
    if(localStorage.getItem('todoList')){
      let item=localStorage.getItem('todoList')
    item=JSON.parse(item)
    state.value=item
    }
   },
   editTask:(state,action)=>{
  let updateData=action.payload
  let current=state.value[updateData.obj.adress]
  current=current.todo[updateData.obj.listAdress]
  current.title=updateData.title;
  current.description=updateData.description
  let jsonArrayOfObjects = JSON.stringify(state.value);
  localStorage.setItem('todoList',jsonArrayOfObjects)
  alert('Updated Succesfully')
  },
    
  }
});

export const {list,addTask,updateSate,editTask,setEdit} = storeSlice.actions;
export default storeSlice.reducer;
