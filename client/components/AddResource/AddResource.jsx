import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postResource } from '../../actions'

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
    dispatch(postResource(resource))
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
    <div className='container center'>
      <form>
        <h2>Add a new resource to the collection</h2>
        <div className='form__group'>
          <label htmlFor='resourceName'>Name</label>
          <input
            name='resourceName'
            onChange={handleChange}
            value={formData.resourceName}
            required
            minlength='2'
            autofocus
          ></input>
        </div>
        <div className='form__group'>
          <label htmlFor='description'>Description</label>
          <input
            name='description'
            onChange={handleChange}
            value={formData.description}
          ></input>
        </div>
        <div className='form__group'>
          <label htmlFor='url'>URL</label>
          <input
            name='url'
            onChange={handleChange}
            value={formData.url}
            placeholder="Copy and paste a link to the resource's own website"
            required
            minlength='6'
          ></input>
        </div>
        <div className='form__group'>
          <label htmlFor='image'>Image file path</label>
          <input
            name='image'
            onChange={handleChange}
            value={formData.image}
          ></input>
        </div>
        <div className='form__group'>
          <label htmlFor='languageLevel'>Language level</label>
          <input
            name='languageLevel'
            onChange={handleChange}
            value={formData.languageLevel}
            required
            minlength='2'
          ></input>
        </div>
        <div className='form__group'>
          <label htmlFor='medium'>Type of resource</label>
          <input
            name='medium'
            onChange={handleChange}
            value={formData.medium}
            required
            minlength='2'
          ></input>
        </div>
        <div className='form__group'>
          <label htmlFor='cost'>Price</label>
          <input
            name='cost'
            onChange={handleChange}
            value={formData.cost}
            required
            minlength='2'
          ></input>
        </div>
        <button className='form__submit' onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  )
}

export default AddResource
