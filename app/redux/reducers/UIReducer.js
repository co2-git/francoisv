import * as types from '../types';

const initialState = {
  scrollTop: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === types.SCROLL) {
    return {...state, scrollTop: action.payload.top};
  }
  return state;
};

export default reducer;
