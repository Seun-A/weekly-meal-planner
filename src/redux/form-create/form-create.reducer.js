const INITIAL_STATE = {
  day:'', 
  meal:'', 
  boxContent:''
}

const formCreateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DAY':
      return{
        ...state,
        day: action.payload
      };
    case 'SET_MEAL':
      return{
        ...state,
        meal: action.payload
      };
    case 'SET_CONTENT':
      return{
        ...state,
        boxContent: action.payload
      };
    default:
      return state;
  }
}

export default formCreateReducer;
