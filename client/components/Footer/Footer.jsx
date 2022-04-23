import React from 'react'

import style from './Footer.module.scss'

function Footer() {
  return (
    <footer class="flex">
      <p>© 2022 Hannah Robinson</p>
      <ul class="flex">
        <li>
          <a
            href="https://github.com/hannah-robinson/te-reo-resources-node-react/"
            target="_blank"
            title="The source code for this website"
          >
            <i class="fa-solid fa-code"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hannah-robinson/"
            target="_blank"
            title="My GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/robinsonhannah"
            target="_blank"
            title="My LinkedIn profile"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
