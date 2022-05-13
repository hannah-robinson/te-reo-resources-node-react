import {
  SET_RESOURCES,
  POST_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
} from '../actions/'

const initialState = []

const resourcesReducer = (state = initialState, action) => {
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
      return [...state.filter((resource) => resource.id != action.payload)]
    default:
      return state
  }
}

export default resourcesReducer
