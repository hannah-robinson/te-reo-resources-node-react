import { SET_RESOURCE, SET_ERROR } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESOURCE:
      return action.payload
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default reducer
