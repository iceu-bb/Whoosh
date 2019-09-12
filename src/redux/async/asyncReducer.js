import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from './asyncConstants';

const initialState = {
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ASYNC_ACTION_START:
      return { loading: true };
    case ASYNC_ACTION_FINISH:
      return { loading: false };
    case ASYNC_ACTION_ERROR:
      return { loading: false };

    default:
      return state;
  }
};
