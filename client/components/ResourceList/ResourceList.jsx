import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchResources } from '../../actions/'
import Resource from '../Resource/Resource'

function ResourceList() {
  const resources = useSelector((state) => state.resources)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResources())
  }, [])
  console.log(resources)
  return (
    <div className='container grid'>
      {resources.map((resource) => (
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
      ))}
    </div>
  )
}

export default ResourceList
