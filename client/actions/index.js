import api from '../apiClient/'

export const SET_RESOURCES = 'SET_RESOURCES'
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE'
export const POST_RESOURCE = 'POST_RESOURCE'
export const DELETE_RESOURCE = 'DELETE_RESOURCE'
export const SET_ERROR = 'SET_ERROR'

export function setResources(resources) {
  return {
    type: SET_RESOURCES,
    payload: resources,
  }
}

export function update(resource) {
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

export function del(id) {
  return {
    type: DELETE_RESOURCE,
    payload: id,
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

export function postResource(resource) {
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

export function updateResource(id, resource) {
  return (dispatch) => {
    return api
      .updateResource(id, resource)
      .then(() => {
        dispatch(update(resource))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function deleteResource(id) {
  return (dispatch) => {
    return api
      .deleteResource(id)
      .then(() => {
        dispatch(del(id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
