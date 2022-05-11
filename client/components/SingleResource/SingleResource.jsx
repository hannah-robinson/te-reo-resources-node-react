import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Resource from '../Resource/Resource'

function SingleResource() {
  const resources = useSelector((state) => state.resources)
  const params = useParams()

  const [resource] = resources.filter((resource) => resource.id == params.id)

  return (
    <div className='container'>
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
