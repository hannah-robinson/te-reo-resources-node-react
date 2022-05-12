import { SET_RESOURCES, POST_RESOURCE, UPDATE_RESOURCE } from '../actions/'

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
    default:
      return state
  }
}

export default resourcesReducer
