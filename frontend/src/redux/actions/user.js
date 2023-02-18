import axios from 'axios';
import {server} from '../store';

export const loadUser = () => async (dispatch) => {
	try {
	  dispatch({
		type: "loadUserRequest",
	  });
  
	  const { data } = await axios.get(`${server}/me`, {
		withCredentials: true,
	  });
  
	  dispatch({
		type: "loadUserSuccess",
		payload: data.user,
	  });
	} catch (error) {
	  dispatch({
		type: "loadUserFail",
		payload: error.response.data.message,
	  });
	}
  };
