import {SagaIterator} from 'redux-saga';
import {all, call, delay, put, takeLatest} from 'redux-saga/effects';

import apiKanye from '../../../services/apiKanye';
import {failureQuote, setLoading, successQuote} from './actions';

function* getQuote(): SagaIterator {
  try {
    yield put(setLoading(true));

    yield delay(500);

    const response = yield call(apiKanye.get, '/');
    yield put(successQuote(response.data.quote));

    //console.log(response.data.quote);
  } catch (err) {
    yield put(failureQuote());
  } finally {
    yield put(setLoading(false));
  }
}

export default all([takeLatest('@quotes/REQUEST_QUOTE', getQuote)]);
