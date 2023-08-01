import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  meal: '',
  day: '',
  content: '',
  visible: false
}

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setEdit(state, action) {
      const { meal, day, content } = action.payload;
      state.meal = meal;
      state.day = day;
      state.content = content;
    },
    hideEdit(state){
      state.visible = false;
    },
    showEdit(state){
      state.visible = true;
    }
  }
})

export const { setEdit, hideEdit, showEdit } = editSlice.actions

export default editSlice.reducer