import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { updateResource } from '../../actions'

function EditResource(props) {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentResourceId = params.id
  const resources = useSelector((state) => state.resources)
  const [resource] = resources.filter(
    (resource) => resource.id == currentResourceId
  )

  useEffect(() => {
    if (resource) {
      setFormData({ ...resource })
    }
  }, [resources])

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

  const submitEditedResource = (id, resource) => {
    dispatch(updateResource(id, resource))
    navigate(`/${resource.id}`)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    submitEditedResource(params.id, formData)
  }

  return (
    <div className='container center'>
      {resource && (
        <form>
          <h2>Edit resource</h2>
          <div className='form__group'>
            <label htmlFor='resourceName'>Name</label>
            <input
              name='resourceName'
              onChange={handleChange}
              value={formData.resourceName}
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
            ></input>
          </div>
          <div className='form__group'>
            <label htmlFor='medium'>Type of resource</label>
            <input
              name='medium'
              onChange={handleChange}
              value={formData.medium}
            ></input>
          </div>
          <div className='form__group'>
            <label htmlFor='cost'>Price</label>
            <input
              name='cost'
              onChange={handleChange}
              value={formData.cost}
            ></input>
          </div>
          <button className='form__submit' onClick={handleSubmit}>
            Save
          </button>
        </form>
      )}
    </div>
  )
}

export default EditResource
