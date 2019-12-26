import { CREATE_MESSAGE, GET_ERRORS } from "./types";

// CREATE MEssage
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// RETURN ERROR
export const returnError = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
