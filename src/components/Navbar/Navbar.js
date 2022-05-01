import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.scss'

// navbar with simple Navbar-brand

const Navbar = ({setSearch, setPageNumber}) => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-white">Rick & Morty Project</Link>
    </div>
</nav>
  )
}



export default Navbar