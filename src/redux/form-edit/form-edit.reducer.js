const INITIAL_STATE = {
  meal: '',
  day: '',
  content: '',
  visible: false
}

const formEditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DAY':
      return {
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
        content: action.payload
      };
    default:
      return state;
  }
}

export default formEditReducer;
