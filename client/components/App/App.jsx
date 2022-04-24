import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// import { fetchResources } from '../../actions'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResourceList from '../ResourceList/ResourceList'

function App() {
  // const resources = useSelector((state) => state.resources)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchResources())
  // }, [])
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ResourceList />} />
          {/* <Route path=":id" element={<Resource />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
