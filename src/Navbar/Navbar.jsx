import React from 'react'
import logo  from '../assets/trolley.png'
import image from '../assets/search.png'
const Navbar = () => {
  return (
    <>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <nav class="navbar-brand">Navbar</nav>
            <form class="d-flex" role="search">
                <input class="form-control me-3" type="search" placeholder="Search item" aria-label="Search" />
                  <img src={ image } alt="search" width='40px' height='40px' />
                <div className='container'>
                  <img src={ logo } alt="trolley" width='40px' height='40px' />
                </div>
            </form>
        </div>
    </nav>
    </>
  )
}

export default Navbar