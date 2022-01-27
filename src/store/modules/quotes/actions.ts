export function requestQuote(): {
  type: string;
} {
  return {
    type: '@quotes/REQUEST_QUOTE',
  };
}

export function successQuote(data: string): {
  type: string;
  payload: {data: string};
} {
  return {
    type: '@quotes/SUCCESS_QUOTE',
    payload: {data},
  };
}

export function failureQuote(): {
  type: string;
} {
  return {
    type: '@quotes/FAILURE_QUOTE',
  };
}

export function setLoading(loading: boolean): {
  type: string;
  payload: {loading: boolean};
} {
  return {
    type: '@quotes/SET_LOADING',
    payload: {loading},
  };
}
