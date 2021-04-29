import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from "../../../helpers/axiosInterceptor";
import {LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS} from "../../../constants/actionTypes";

export default ({password, userName: username}) => dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });
  axiosInstance.post('auth/login', {password, username})
    .then(res => {
      console.log('res.data => ', res.data);
      AsyncStorage.setItem('token', res.data.token);
      AsyncStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {console.log('err.response.data => ', err.response.data)
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    })
}