import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <Container className='about'>
      <div className='about-info' >
        <h2>About Me</h2>
        <p>I am a React-based Front End developer who is skilled in
          HTML, CSS and Javascript with expertise in the React framework.
          I'm a graduate of the University of North Carolina Chapel Hill's
          Full Stack Web Development course, and I am looking to expand my skillset
          in web development.
        </p>
        <p>I graduated from Elon University in 2020 with a Bachelor's in Communication,
          studying Cinema and Television Arts.
        </p>

        <p>Outside of programming, I am interested in voice acting, livestreaming, and playing
          Bass!
        </p>
      </div>
    </Container>
  )
}

export default About
