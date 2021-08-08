import * as authorApi from "../../api/authorApi";
import * as actionTypes from "./actionTypes";
import * as apiCallStatusActions from "./apiCallStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(apiCallStatusActions.beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallStatusActions.apiCallError());
        throw error;
      });
  };
}
