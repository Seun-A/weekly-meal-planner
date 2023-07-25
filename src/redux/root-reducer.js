import { combineReducers } from "redux";

import formCreateReducer from "./form-create/form-create.reducer";


export default combineReducers({
  formCreate: formCreateReducer
});
