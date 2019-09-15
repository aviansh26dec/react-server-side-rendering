import { frontConstants } from "../constants/frontConstants";
import { frontService } from "../services/frontService";

export const getMenuList = permalink => {
  return dispatch => {
    frontService.getMenuList(permalink).then(
      data => {
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(data) {
    return { type: frontConstants.GET_MENU_REQUEST, data };
  }
  function success(data) {
    return { type: frontConstants.GET_MENU_SUCCESS, data };
  }
  function failure(error) {
    return { type: frontConstants.GET_MENU_FAILURE, error };
  }
};