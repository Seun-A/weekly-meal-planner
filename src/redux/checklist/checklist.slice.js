import { createSlice } from '@reduxjs/toolkit'

const initialState = () => {
  const storage = false // Yet to handle local storage
  
  if (storage) {
    return storage
  } else {
    return {
      arr: []
    }
  }
}

const checklistSlice = createSlice({
  name: 'checklist',
  initialState, 
  reducers: {
    checklistItemAdd(state, action) {
      const { content } = action.payload;

      const contentArr = content.split(/, | and /)
        .map(item => item.startsWith('and ') ? 
          item.replace('and ', '') 
          : item
        )
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .filter(word => !state.arr.includes(word))
      
      contentArr.forEach(element => {
        state.arr.push(element)
      });

    }
  }
})

export const { checklistItemAdd } = checklistSlice.actions


export default checklistSlice.reducer