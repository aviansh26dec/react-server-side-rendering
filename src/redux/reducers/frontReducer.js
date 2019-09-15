import { frontConstants } from "../constants/frontConstants";
const initialState = {
	sending: false,
	error: null,
	menuList: {},
};

export default function(state = initialState, action){
	switch(action.type){
		case frontConstants.GET_MENU_REQUEST:
	      return {
	        ...state,
	        sending: true
	      };
	    case frontConstants.GET_MENU_SUCCESS:
	      return {
	        ...state,
	        sending: false,
	        menuList: action.data
	      };
	    case frontConstants.GET_MENU_FAILURE:
	      return {
	        ...state,
	        sending: false,
	        error: action.error
	      };
		default:
			return state;
	}
}