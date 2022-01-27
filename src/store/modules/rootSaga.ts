import {all} from 'redux-saga/effects';

import quotes from './quotes/sagas';

export default function* rootSaga(): Generator {
  return yield all([quotes]);
}
