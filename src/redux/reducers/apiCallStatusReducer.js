import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == actionTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type == actionTypes.API_CALL_ERROR ||
    action.type.includes("SUCCESS")
  ) {
    return state - 1;
  }

  return state;
}
