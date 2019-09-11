import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants';

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return payload;
    case MODAL_CLOSE:
      return null;
    default:
      return state;
  }
};
