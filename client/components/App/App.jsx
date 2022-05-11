import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { fetchResources } from '../../actions/'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResourceList from '../ResourceList/ResourceList'
import AddResource from '../AddResource/AddResource'
import EditResource from '../EditResource/EditResource'
import SingleResource from '../SingleResource/SingleResource'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResources())
  }, [])

  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ResourceList />} />
          <Route path='/:id' element={<SingleResource />} />
          <Route path='/:id/edit' element={<EditResource />} />
          <Route path='/add' element={<AddResource />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
