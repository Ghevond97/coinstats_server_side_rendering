import { RECEIVE_LOGO } from '../constants';

export const logo = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_LOGO:
      return state.concat([action.payload]);
    default:
      return state;
  }
};
