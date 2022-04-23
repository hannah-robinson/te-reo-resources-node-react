import request from 'superagent'

const resourcesUrl = '/api/v1/resources/'

export function getResources() {
  return request.get(resourcesUrl).then((response) => response.body.resources)
}

export function postResource(resource) {
  return request
    .post(resourcesUrl)
    .send(resource)
    .then((response) => response.body)
}
