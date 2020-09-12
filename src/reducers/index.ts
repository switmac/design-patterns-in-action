import { FETCH_USER } from "../constants/actionTypes";
import { Action } from "../models/action";

const DEFAULT_USER = {
  user: {
    id: 1,
  },
};
export default (state: any = DEFAULT_USER, action: Action) => {
  if (action.type === FETCH_USER) {
    return { ...state, user: action.payload };
  }
  return state;
};
