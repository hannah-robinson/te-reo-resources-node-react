import {
  SET_RESOURCES,
  POST_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  SET_ERROR,
} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return action.payload
    case POST_RESOURCE:
      return [...state, action.payload]
    case UPDATE_RESOURCE:
      return [
        ...state.map((resource) =>
          resource.id == action.payload.id ? action.payload : resource
        ),
      ]
    case DELETE_RESOURCE:
      return action.payload
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default reducer
