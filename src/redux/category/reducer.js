import { FETCH_CATEGORY } from './constants';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORY:
      return [...payload];

    default:
      return state;
  }
};
