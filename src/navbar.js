import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='header'>
        <nav className='list'>
            <ul>
                <li>
                    <a href='#'>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#'>
                        About Us
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Services
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar