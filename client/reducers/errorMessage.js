import { SET_ERROR } from '../actions'

function errorMessage(state = '', action) {
  switch (action.type) {
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default errorMessage
