import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // errorHandle: errorR,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
