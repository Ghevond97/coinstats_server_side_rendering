import { RECEIVE_STATS } from '../constants';

export const stats = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STATS:
      return state.concat([...action.payload]);

    default:
      return state;
  }
};
