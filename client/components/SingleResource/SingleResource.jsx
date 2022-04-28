import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchResource } from '../../actions'

import Resource from '../Resource/Resource'

function SingleResource() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResource(params.id))
  }, [])

  const resource = useSelector((state) => state.resource)

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
      />
    </div>
  )
}

export default SingleResource
