import { SET_RESOURCE, SET_ERROR, UPDATE_RESOURCE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESOURCE:
      return action.payload
    case UPDATE_RESOURCE:
      return action.payload
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default reducer
