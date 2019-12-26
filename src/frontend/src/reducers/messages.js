import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
      break;

    case CREATE_MESSAGE:
      return (state = action.payload);
      break;

    default:
      return state;
      break;
  }
}
