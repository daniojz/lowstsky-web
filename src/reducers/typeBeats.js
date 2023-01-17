// action types
const GET_TYPEBEATS = "CALL_REQUEST";
const PUT_TYPEBEAT = "PUT_TYPEBEAT";
const DELETE_TYPEBEAT = "CALL_DELETE";
const PUT_SUCCESS = "PUT_SUCCESS";
const PUT_FAILURE = "PUT_FAILURE";
const CALL_SUCCESS = "CALL_SUCCESS";
const CALL_FAILURE = "CALL_FAILURE";

// reducer with initial state
const initialState = {
  loading: false,
  typeBeats: [],
  typeBeatAdded: null,
  error: null
};

export function typeBeats(state = initialState, action) {
  switch (action.type) {
    case GET_TYPEBEATS:
      return { ...state, loading: true, error: null };
    case PUT_TYPEBEAT: 
      return { ...state, loading: true, error: null };
    case PUT_SUCCESS:
      return { ...state, loading: false, typeBeatAdded: action.typeBeatAdded };
    case PUT_FAILURE:
      return { ...state, loading: false, typeBeatAdded: action.typeBeatAdded };
    case CALL_SUCCESS:
      return { ...state, loading: false, typeBeats: action.typeBeats };
    case CALL_FAILURE:
      return { ...state, loading: false, typeBeats: null, error: action.error };
    default:
      return state;
  }
}