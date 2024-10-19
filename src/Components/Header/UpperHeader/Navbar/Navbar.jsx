import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <section className="navbarinner">
        <div className="logo">
        <img
          src="https://www.everestfoods.com/wp-content/uploads/2022/01/everest-logo.svg"
          alt=""
        />
      </div>


      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>


    <div className="linkpages">
    <label htmlFor="check" className="checkbtn">
<i className="fa fa-times-rectangle "></i>
      </label>

    <Link to="/">HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/product'>PRODUCTS</Link>
      <Link to='/login'>CONTACT /LOG IN</Link>
    </div>
        </section>

    </div>
  )
}
