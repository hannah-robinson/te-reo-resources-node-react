import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className='primary-header flex'>
        <div className='logo'>
          <Link to={'/'}>
            <i className='fa-solid fa-comment-dots'></i>
          </Link>
        </div>
        <nav>
          <ul
            id='primary-navigation'
            className='primary-navigation underline-indicators flex nav-link'
          >
            <li key='home'>
              <Link to={'/'}>All Resources</Link>
            </li>
            <li key='add'>
              <Link to={'/add'}>Add a Resource</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Te Reo Māori Learning Resources</h1>
    </div>
  )
}

export default Header
