import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function EditResource(props) {
  const params = useParams()

  const currentResourceId = params.id
  const resources = useSelector((state) => state.resources)
  const [resource] = resources.filter(
    (resource) => resource.id == currentResourceId
  )

  useEffect(() => {
    setFormData({ ...resource })
  }, [])

  const [formData, setFormData] = useState({
    resourceName: '',
    description: '',
    url: '',
    image: '',
    languageLevel: '',
    medium: '',
    cost: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.submitEditedResource(params.id, formData)
  }

  return (
    <div className='container'>
      <form>
        <h2>Edit resource</h2>
        <p>
          <label htmlFor='resourceName'>Name: </label>
          <input
            name='resourceName'
            onChange={handleChange}
            defaultValue={resource.resourceName}
            value={formData.resourceName}
          ></input>
        </p>
        <p>
          <label htmlFor='description'>Description: </label>
          <input
            name='description'
            onChange={handleChange}
            value={formData.description}
          ></input>
        </p>
        <p>
          <label htmlFor='url'>
            URL – copy and past a link to the resource's own website:{' '}
          </label>
          <input
            name='url'
            onChange={handleChange}
            value={formData.url}
          ></input>
        </p>
        <p>
          <label htmlFor='image'>Image file path: </label>
          <input
            name='image'
            onChange={handleChange}
            value={formData.image}
          ></input>
        </p>
        <p>
          <label htmlFor='languageLevel'>Language level: </label>
          <input
            name='languageLevel'
            onChange={handleChange}
            value={formData.languageLevel}
          ></input>
        </p>
        <p>
          <label htmlFor='medium'>Type of resource: </label>
          <input
            name='medium'
            onChange={handleChange}
            value={formData.medium}
          ></input>
        </p>
        <p>
          <label htmlFor='cost'>Price: </label>
          <input
            name='cost'
            onChange={handleChange}
            value={formData.cost}
          ></input>
        </p>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default EditResource
