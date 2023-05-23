import React from 'react'
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="nav">
      <nav className="nav__container__actions">
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
