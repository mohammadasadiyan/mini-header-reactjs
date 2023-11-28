import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.header}>
        <nav className={styles.list}>
            <ul>
                <li>
                    <a style={{fontSize: "20px"}} href='#'>
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