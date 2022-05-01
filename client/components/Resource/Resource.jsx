import React from 'react'

// import style from './Resource.module.scss'

function Resource({
  id,
  resourceName,
  image,
  languageLevel,
  medium,
  description,
  cost,
  url,
  delResource,
}) {
  const handleDelete = (evt) => {
    evt.preventDefault()
    delResource(id)
  }

  return (
    <div className="card" key={id}>
      <h2>{resourceName}</h2>
      <img src={image} />
      <p>{description}</p>
      <div className="card-details">
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
      <a href={url}>
        Visit site <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
      <div className="crud-links">
        <a href={`/${id}/edit`}>Edit</a>{' '}
        <a id={id} onClick={handleDelete}>
          Delete
        </a>
      </div>
    </div>
  )
}

export default Resource
