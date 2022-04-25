import React, { useState } from 'react'

function ResourceForm(props) {
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
    props.submitResource(formData)
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
    <form>
      <h1>Add a new resource to the collection:</h1>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>
      </p>
      <p>
        <label htmlFor="colour">Colour: </label>
        <input
          name="colour"
          onChange={handleChange}
          value={formData.colour}
        ></input>
      </p>
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

export default ResourceForm
