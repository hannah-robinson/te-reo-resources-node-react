import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'
import api from '../../apiClient'
import { fetchResources } from '../../actions/'

import {
  postResourceAction,
  updateResource as updateResourceAction,
} from '../../actions'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResourceList from '../ResourceList/ResourceList'
import AddResource from '../AddResource/AddResource'
import EditResource from '../EditResource/EditResource'
import SingleResource from '../SingleResource/SingleResource'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchResources())
  }, [])

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

  const submitEditedResource = (id, resource) => {
    return api
      .updateResource(id, resource)
      .then((resource) => {
        dispatch(updateResourceAction(resource))
        return null
      })
      .then(() => {
        navigate(`/${resource.id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ResourceList />} />
          <Route path='/:id' element={<SingleResource />} />
          <Route
            path='/:id/edit'
            element={
              <EditResource submitEditedResource={submitEditedResource} />
            }
          />
          <Route
            path='/add'
            element={<AddResource submitNewResource={submitNewResource} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
