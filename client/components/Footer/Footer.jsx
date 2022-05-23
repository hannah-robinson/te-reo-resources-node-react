import React from 'react'

function Footer() {
  return (
    <footer className='flex'>
      <p>© 2022 Hannah Robinson</p>
      <ul className='flex'>
        <li>
          <a
            href='https://github.com/hannah-robinson/te-reo-resources-node-react/'
            target='_blank'
            title='The source code for this website'
          >
            <i className='fa-solid fa-code'></i>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/hannah-robinson/'
            target='_blank'
            title='My GitHub'
          >
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/robinsonhannah'
            target='_blank'
            title='My LinkedIn profile'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
