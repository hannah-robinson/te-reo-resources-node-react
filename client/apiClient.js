import request from 'superagent'

const resourcesUrl = '/api/v1/resources/'

// Read
export function getResources() {
  return request.get(resourcesUrl).then((response) => response.body.resources)
}

export function getResource(id) {
  return request.get(resourcesUrl + id).then((response) => response.body)
}

// Create
export function postResource(resource) {
  return request
    .post(resourcesUrl)
    .send(resource)
    .then((response) => response.body)
}

// Delete
export function deleteResource(id) {
  return (
    request
      .del(resourcesUrl + id)
      .send(id)
      // .then((response) => {
      //   console.log(response)
      //   if (response.body.resources) {
      //     response.body.resources
      //   } else {
      //     response.body.resource
      //   }
      // })
      .end((response) => {
        console.log(response)
        response.body
      })
    // .then(() => {
    //   getResources()
    //   return null
    // })
  )
}

// export function deleteResourceSingle(id) {
//   return request
//     .del(resourcesUrl + id)
//     .send(id)
//     .then((response) => response.body.resources)
// }

// Update
export function updateResource(id, resource) {
  return request
    .patch(resourcesUrl + id)
    .send(resource)
    .then((res) => {
      return res.body
    })
}
