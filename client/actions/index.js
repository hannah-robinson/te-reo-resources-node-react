import { getResources, getResource } from '../apiClient'

export const SET_RESOURCES = 'SET_RESOURCES'
export const SET_RESOURCE = 'SET_RESOURCE'

export function setResources(resources) {
  return {
    type: SET_RESOURCES,
    payload: resources,
  }
}

export function setResource(resource) {
  return {
    type: SET_RESOURCE,
    payload: resource,
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

export function fetchResource(id) {
  return (dispatch) => {
    return getResource(id).then((resource) => {
      dispatch(setResource(resource))
      return null
    })
  }
}
