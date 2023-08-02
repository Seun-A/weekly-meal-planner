import { createSlice } from '@reduxjs/toolkit'

const initialState = () => {
  const storage = JSON.parse(localStorage.getItem('table'))
  
  if (storage) {
    return storage
  } else {
    return {
      Mon: { Breakfast: '', Lunch: '', Dinner: '' },
      Tue: { Breakfast: '', Lunch: '', Dinner: '' },
      Wed: { Breakfast: '', Lunch: '', Dinner: '' },
      Thur: { Breakfast: '', Lunch: '', Dinner: '' },
      Fri: { Breakfast: '', Lunch: '', Dinner: '' },
      Sat: { Breakfast: '', Lunch: '', Dinner: '' },
      Sun: { Breakfast: '', Lunch: '', Dinner: '' }
    }
  }
}


const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    mealCreated(state, action) {
      const { day, meal, content } = action.payload;
      state[day][meal] = content;
    }
  }
})


export const { mealCreated } = tableSlice.actions

export default tableSlice.reducer