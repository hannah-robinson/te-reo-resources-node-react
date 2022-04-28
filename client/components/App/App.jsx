import React from 'react'
// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { postResource } from '../../apiClient'
// import { fetchResources } from '../../actions'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResourceList from '../ResourceList/ResourceList'
import ResourceForm from '../ResourceForm/ResourceForm'
import SingleResource from '../SingleResource/SingleResource'

function App() {
  // const [resources, setResources] = useState([])

  // const resources = useSelector((state) => state.resources)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchResources())
  // }, [])

  const submitResource = (resource) => {
    return postResource(resource)
      .then((newResource) => {
        console.log('submit resource', newResource)
        // setResources([...resources, newResource])
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ResourceList />} />
          <Route path="/:id" element={<SingleResource />} />
          <Route
            path="/add"
            element={<ResourceForm submitResource={submitResource} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
