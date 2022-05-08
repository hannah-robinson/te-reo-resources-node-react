import { getResources, getResource } from '../apiClient'

export const SET_RESOURCES = 'SET_RESOURCES'
export const SET_RESOURCE = 'SET_RESOURCE'
export const DELETE_RESOURCE = 'DELETE_RESOURCE'
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE'
export const POST_RESOURCE = 'POST_RESOURCE'
export const SET_ERROR = 'SET_ERROR'

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

export function removeResource(id) {
  return {
    type: DELETE_RESOURCE,
    payload: id,
  }
}

export function updateResource(resource) {
  return {
    type: UPDATE_RESOURCE,
    payload: resource,
  }
}

export function postResourceAction(resource) {
  return {
    type: POST_RESOURCE,
    payload: resource,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export function fetchResources() {
  return (dispatch) => {
    return getResources()
      .then((resources) => {
        dispatch(setResources(resources))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function fetchResource(id) {
  return (dispatch) => {
    return getResource(id)
      .then((resource) => {
        dispatch(setResource(resource))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
