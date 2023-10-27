import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task_manager',
  initialState: { //trang thai ban dau cua state
    list: [],
  },
  reducers: {
    //them task
    add: (state, action) => { 
      state.list = state.list.concat(action.payload) // type->hanh dong, payload->gia tri ap dung đe thay doi state
    },
    //xoa task
    del: (state, action) => {
      state.list = state.list.filter(task => {
        return task !== action.payload;
      })
    },
  },
})

export const { add, del } = taskSlice.actions

export default taskSlice.reducer