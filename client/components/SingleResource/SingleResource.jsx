import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { fetchResource, removeResource } from '../../actions'
import { deleteResource } from '../../apiClient'
import Resource from '../Resource/Resource'

function SingleResource() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchResource(params.id))
  }, [resource])

  const resource = useSelector((state) => state.resource)

  const delResource = (id) => {
    return deleteResource(id)
      .then((id) => {
        dispatch(removeResource(id))
        return null
      })
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const submitEditedResource = (id, resource) => {
    return updateResource(id, resource)
      .then((resource) => {
        dispatch(updateResourceAction(resource))
        return null
      })
      .then(() => {
        navigate(`/${resource.id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
        delResource={delResource}
      />
    </div>
  )
}

export default SingleResource
