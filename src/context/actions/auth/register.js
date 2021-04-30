import axiosInstance from "../../../helpers/axiosInterceptor";
import {CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS} from "../../../constants/actionTypes";

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
  email,
  password,
  userName: username,
  firstName: first_name,
  lastName: last_name,}) => dispatch => onSuccess => {
  dispatch({
    type: REGISTER_LOADING
  });
  axiosInstance.post('auth/register', {
    email,
    password,
    username,
    first_name,
    last_name,
  })
    .then(res => {
      console.log('res.data => ', res.data)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      onSuccess(res.data);
    })
    .catch(err => {console.log('err.response.data => ', err.response.data)
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    })
}