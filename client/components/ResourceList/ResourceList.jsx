import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchResources, removeResource } from '../../actions'
import { deleteResource } from '../../apiClient'

// import style from './ResourceList.module.scss'

import Resource from '../Resource/Resource'

function ResourceList() {
  const resources = useSelector((state) => state.resources)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResources())
  }, [])

  const delResource = (id) => {
    return deleteResource(id)
      .then((id) => {
        dispatch(removeResource(id))
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container grid">
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
          delResource={delResource}
        />
      ))}
    </div>
  )
}

export default ResourceList
