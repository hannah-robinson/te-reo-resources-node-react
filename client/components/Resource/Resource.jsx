import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteResource } from '../../actions/'

function Resource({
  id,
  resourceName,
  image,
  languageLevel,
  medium,
  description,
  cost,
  url,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelete = (evt) => {
    evt.preventDefault()
    dispatch(deleteResource(evt.target.id))
    navigate('/')
  }

  return (
    <div className='card' key={id}>
      <h2>{resourceName}</h2>
      <img src={image} />
      <p>{description}</p>
      <div className='card__details'>
        <p>
          <em>
            <strong>Language level:</strong> {languageLevel}
          </em>
        </p>
        <p>
          <em>
            <strong>Type of resource:</strong> {medium}
          </em>
        </p>
        <p>
          <em>
            <strong>Cost:</strong> {cost}
          </em>
        </p>
      </div>
      <a className='btn btn--resource-link' href={url}>
        Visit site <i className='fa-solid fa-arrow-up-right-from-square'></i>
      </a>
      <div>
        <Link className='btn btn--crud' to={`/${id}/edit`}>
          Edit
        </Link>{' '}
        <a id={id} className='btn btn--crud' onClick={handleDelete}>
          Delete
        </a>
      </div>
    </div>
  )
}

export default Resource
