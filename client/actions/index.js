import api from '../apiClient/'

export const SET_RESOURCES = 'SET_RESOURCES'
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE'
export const POST_RESOURCE = 'POST_RESOURCE'
export const SET_ERROR = 'SET_ERROR'

export function setResources(resources) {
  return {
    type: SET_RESOURCES,
    payload: resources,
  }
}

export function updateResource(resource) {
  return {
    type: UPDATE_RESOURCE,
    payload: resource,
  }
}

export function post(resource) {
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
    return api
      .getResources()
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

export function postResource() {
  return (dispatch) => {
    return api
      .postResource(resource)
      .then((resource) => {
        dispatch(post(resource))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
