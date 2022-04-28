import { SET_RESOURCE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESOURCE:
      return action.payload
    default:
      return state
  }
}

export default reducer
