import {combineReducers} from 'redux';

import quotes from './quotes/reducer';

const rootReducer = combineReducers({
  quotes,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
