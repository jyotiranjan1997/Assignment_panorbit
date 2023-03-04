import axios from "axios";
import {
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  GET_PROFILE_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from "./AuthType";

// GET all users details req

export const Get_Users_Req = () => {
  return { type: GET_USERS_REQUEST };
};

export const Get_Users_Fail = (payload) => {
  return { type: GET_USERS_FAILED, payload };
};

export const Get_Users_Success = (payload) => {
  return { type: GET_USERS_SUCCESS, payload };
};

// GET PROFILE details req

export const Get_Profile_Req = () => {
  return { type: GET_PROFILE_REQUEST };
};

export const Get_Profile_Fail = (payload) => {
  return { type: GET_PROFILE_FAILED, payload };
};

export const Get_Profile_Success = (payload) => {
  return { type: GET_PROFILE_SUCCESS, payload };
};

export const GET_USERS = () => (dispatch) => {
  dispatch(Get_Users_Req());
  axios
    .get("https://panorbit.in/api/users.json")
    .then((res) => dispatch(Get_Users_Success(res.data.users)))
    .catch((err) =>
      dispatch(Get_Users_Fail("Something went wrong in Api request !"))
    );
};

export const GET_PROFILE = () => (dispatch) => {

    
};
