import { getResources } from '../apiClient'
import { useDispatch } from 'react-redux'

export const SET_RESOURCES = 'SET_RESOURCES'

export function setResources(resources) {
  return {
    type: SET_RESOURCES,
    payload: resources,
  }
}

export function fetchResources() {
  return (dispatch) => {
    return getResources().then((resources) => {
      dispatch(setResources(resources))
      return null
    })
  }
}
