import { configureStore } from '@reduxjs/toolkit'
import tableReducer from "./table/table.slice";
import editReducer from "./edit/edit.slice";
import checklistReducer from './checklist/checklist.slice';

const store = configureStore({
  reducer: {
    table: tableReducer,
    edit: editReducer,
    checklist: checklistReducer
  }
})

export default store
