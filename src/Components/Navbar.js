import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>Navbar</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/users">User</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/books/oldbooks">old books</Link>
            <Link to="/books/newbooks">new books</Link>
        </ul>
    </nav>
  )
}

export default Navbar