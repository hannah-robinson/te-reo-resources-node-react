import request from 'superagent'

const resourcesUrl = '/api/v1/resources/'

export function getResources() {
  return request.get(resourcesUrl).then((response) => response.body.resources)
}

export function getResource(id) {
  console.log('resourcesUrl + id'.resourcesUrl + id)
  return request.get(resourcesUrl + id).then((response) => response.body)
}

export function postResource(resource) {
  return request
    .post(resourcesUrl)
    .send(resource)
    .then((response) => response.body)
}

export function deleteResource(id) {
  return request
    .del(resourcesUrl + id)
    .send(id)
    .then((response) => response.body.resources)
}
