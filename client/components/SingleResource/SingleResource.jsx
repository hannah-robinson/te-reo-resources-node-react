import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchResource } from '../../actions'

import { deleteResourceSingle } from '../../apiClient'

import Resource from '../Resource/Resource'

function SingleResource() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResource(params.id))
  }, [resource])

  const resource = useSelector((state) => state.resource)

  // const delResource = (id) => {
  //   return deleteResourceSingle(id)
  //     .then((resources) => {
  //       dispatch()
  //       return null
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  return (
    <div className="container">
      <Resource
        key={resource.id}
        resourceName={resource.resourceName}
        image={resource.image}
        description={resource.description}
        languageLevel={resource.languageLevel}
        medium={resource.medium}
        cost={resource.cost}
        url={resource.url}
        id={resource.id}
        // delResource={delResource}
      />
    </div>
  )
}

export default SingleResource
