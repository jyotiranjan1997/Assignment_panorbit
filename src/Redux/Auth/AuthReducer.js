import {
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  GET_PROFILE_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from "./AuthType";

const IntialState = {
  users: [],
  loading: false,
  error: false,
};

export const UserReducer = (state = IntialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_USERS_SUCCESS: {
      return { ...state, loading: false, users: payload };
    }
    case GET_USERS_FAILED: {
      return { ...state, loading: false, error: payload };
    }
    default: {
      return state;
    }
  }
};
