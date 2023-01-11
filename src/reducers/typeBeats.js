// action types
const CALL_REQUEST = "CALL_REQUEST";
const CALL_SUCCESS = "CALL_SUCCESS";
const CALL_FAILURE = "CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  typeBeats: [],
  error: null
};

export function typeBeats(state = initialState, action) {
  switch (action.type) {
    case CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case CALL_SUCCESS:
      return { ...state, fetching: false, typeBeats: action.typeBeats };
    case CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}