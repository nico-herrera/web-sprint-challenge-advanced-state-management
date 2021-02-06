import {
  START_FETCHING,
  END_FETCHING,
  DATA_RETRIEVED,
  SEND_DATA,
  SET_ERROR,
} from "../actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  console.log(state.smurfs);
  switch (action.type) {
    case START_FETCHING:
      return { ...state, isFetching: true, error: "", isLoading: true };

    case END_FETCHING:
      return { ...state, isFetching: false, error: "", isLoading: false };

    case DATA_RETRIEVED:
      console.log(action.payload);
      return { ...state, smurfs: action.payload, isFetching: false };

    case SEND_DATA:
      return { ...state, smurfs: action.payload, isFetching: false };

    case SET_ERROR:
      return { ...state, error: action.payload, isFetching: false };

    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
