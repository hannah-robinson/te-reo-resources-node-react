import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import api from '../../apiClient'
import { postResourceAction } from '../../actions'

function AddResource() {
  const dispatch = useDispatch()

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

  const submitNewResource = (resource) => {
    return api
      .postResource(resource)
      .then((resource) => {
        dispatch(postResourceAction(resource))
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    submitNewResource(formData)
    setFormData({
      resourceName: '',
      description: '',
      url: '',
      image: '',
      languageLevel: '',
      medium: '',
      cost: '',
    })
  }

  return (
    <div className='container'>
      <form>
        <h2>Add a new resource to the collection</h2>
        <p>
          <label htmlFor='resourceName'>Name: </label>
          <input
            name='resourceName'
            onChange={handleChange}
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

export default AddResource
