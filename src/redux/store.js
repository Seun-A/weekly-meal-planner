import { configureStore } from '@reduxjs/toolkit'
import tableReducer from "./table/table.slice";
import editReducer from "./edit/edit.slice";

const store = configureStore({
  reducer: {
    table: tableReducer,
    edit: editReducer
  }
})

export default store
