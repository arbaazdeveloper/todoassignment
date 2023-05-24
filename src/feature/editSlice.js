import { createSlice, current } from '@reduxjs/toolkit';

const editSlice = createSlice({
    name: 'editState',
    initialState: {value:{}},
    reducers: {
        setEditState:(state,action)=>{
            const obj=action.payload
            let current=localStorage.getItem('todoList')
            current=JSON.parse(current)
            let subject=current[obj.adress]
            subject=subject.todo
            subject=subject[obj.listAdress]
            subject={...subject,obj}
            state.value=subject
        }

    }})

    export const {setEditState} = editSlice.actions;
export default editSlice.reducer;