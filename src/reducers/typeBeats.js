// action types
const GET_TYPEBEATS = 'GET_TYPEBEATS'
const PUT_TYPEBEAT = 'PUT_TYPEBEAT'
const PUT_SUCCESS = 'PUT_SUCCESS'
const PUT_FAILURE = 'PUT_FAILURE'
const DELETE_TYPEBEATS = 'DELETE_TYPEBEATS'
const DELETE_SUCCESS = 'DELETE_SUCCESS'
const DELETE_FAILURE = 'DELETE_FAILURE'
const CALL_SUCCESS = 'CALL_SUCCESS'
const CALL_FAILURE = 'CALL_FAILURE'
const RESET_STATE = 'RESET_STATE'

// reducer with initial state
const initialState = {
  loading: false,
  typeBeats: [],
  typeBeatAdded: null,
  typeBeatsDeleted: null,
  error: null,
}

export function typeBeats(state = initialState, action) {
  switch (action.type) {
    case PUT_TYPEBEAT:
    case DELETE_TYPEBEATS:
    case GET_TYPEBEATS:
      return { ...state, loading: true, error: null }

    case CALL_SUCCESS:
      return { ...state, loading: false, typeBeats: action.typeBeats }
    case CALL_FAILURE:
      return { ...state, loading: false, typeBeats: null, error: action.error }

    case PUT_SUCCESS:
      return { ...state, loading: false, typeBeatAdded: action.typeBeatAdded }
    case PUT_FAILURE:
      return {
        ...state,
        loading: false,
        typeBeatAdded: null,
        error: action.error,
      }

    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        typeBeatsDeleted: action.typeBeatsDeleted,
      }
    case DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        typeBeatsDeleted: null,
        error: action.error,
      }

    case RESET_STATE:
      return { ...state, ...initialState }

    default:
      return state
  }
}
