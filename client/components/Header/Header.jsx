import React from 'react'
import { Link } from 'react-router-dom'

import style from './Header.module.scss'

function Header() {
  return (
    <div>
      <header className="primary-header flex">
        <div className="logo">
          <a href="/">
            <i className="fa-solid fa-comment-dots"></i>
          </a>
        </div>
        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation underline-indicators flex nav-link"
          >
            <li key="home">
              <Link to={'/'}>All Resources</Link>
            </li>
            {/* <li>
              <a href="/free">Free Resources</a>
            </li> */}
          </ul>
        </nav>
      </header>
      <h1>Te Reo Māori Learning Resources</h1>
    </div>
  )
}

export default Header
