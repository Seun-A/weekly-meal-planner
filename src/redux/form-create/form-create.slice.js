import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Mon: { Breakfast: '', Lunch: '', Dinner: '' },
  Tue: { Breakfast: '', Lunch: '', Dinner: '' },
  Wed: { Breakfast: '', Lunch: '', Dinner: '' },
  Thur: { Breakfast: '', Lunch: '', Dinner: '' },
  Fri: { Breakfast: '', Lunch: '', Dinner: '' },
  Sat: { Breakfast: '', Lunch: '', Dinner: '' },
  Sun: { Breakfast: '', Lunch: '', Dinner: '' }
}

const formCreateSlice = createSlice({
  name: 'form-create',
  initialState,
  reducers: {
    mealCreated(state, action) {
      return {
        ...state,
        [action.payload.day]: action.payload
      }
    }
  }
})

export const { mealCreated } = formCreateSlice.actions

export default formCreateSlice.reducer