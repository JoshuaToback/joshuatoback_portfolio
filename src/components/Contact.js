import React from 'react'
import { Container } from 'react-bootstrap'

function Contact() {
  return (
<Container>
  <h1>Contact Me!</h1>
  <p>Want to work together? Send me an email and let's make something special.</p>
  <form target="_blank" action="https://formsubmit.co/joshuatobackva@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required />
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required />
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
  </Container>
  )
}

export default Contact
