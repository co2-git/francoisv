import * as types from '../types';
import store from '../store';

export const onScroll = async (event) => {
  try {
    store.dispatch({type: types.SCROLL, payload: {top: event.target.scrollTop}});
  } catch (error) {
    store.dispatch({type: types.ERROR, payload: {error}});
  }
};
