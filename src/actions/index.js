import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const END_FETCHING = "END_FETCHING";
export const DATA_RETRIEVED = "DATA_RETRIEVED";
export const SEND_DATA = "SEND_DATA";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => async (dispatch) => {
  dispatch({ type: START_FETCHING });
  try {
    const data = await axios("http://localhost:3333/smurfs");
    console.log(data);
    dispatch({ type: END_FETCHING });
    dispatch({ type: DATA_RETRIEVED, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const addSmurf = (data) => async (dispatch) => {
  try {
    const sendData = await axios.post("http://localhost:3333/smurfs", data);
    dispatch({ type: SEND_DATA, payload: sendData });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: SET_ERROR, payload: error.response.data.Error });
  }
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
