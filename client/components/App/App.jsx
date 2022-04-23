import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResourceList from '../ResourceList/ResourceList'

function App() {
  return (
    <>
      <div>
        <Header />
        <ResourceList />
        <Footer />
      </div>
    </>
  )
}

export default App
