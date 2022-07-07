import React from 'react'
import logo  from '../assets/trolley.png'
import image from '../assets/search.png'
const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-light">
        <div className="container-fluid">
            <nav className="navbar-brand">Navbar</nav>
            <form className="d-flex" role="search">
                <input className="form-control me-3" type="search" placeholder="Search item" aria-label="Search" />
                  <img src={ image } alt="search" width='40px' height='40px' />
                <div classNameName='container'>
                  <img src={ logo } alt="trolley" width='40px' height='40px' />
                </div>
            </form>
        </div>
    </nav>
    </>
  )
}

export default Navbar