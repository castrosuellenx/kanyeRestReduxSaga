type PropsPayload = {
  data: string;
  loading: boolean;
};

type PropsState = {
  data: string;
  loading: boolean;
  error: boolean;
};

const INITIAL_STATE: PropsState = {
  data: '',
  loading: false,
  error: false,
};

export default function quotes(
  state = INITIAL_STATE,
  action: {type: string; payload: PropsPayload},
): PropsState {
  switch (action.type) {
    case '@quotes/SUCCESS_QUOTE':
      return {...state, data: action.payload.data, error: false};

    case '@quotes/FAILURE_QUOTE':
      return {...state, data: '', error: true};

    case '@quotes/SET_LOADING':
      return {...state, loading: action.payload.loading};

    default:
      return state;
  }
}
