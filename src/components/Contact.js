import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact">
      <h2>Contact Me!</h2>
      <p>
        Want to work together? Send me an email and let's make something
        special.
      </p>
      <form
        target="_blank"
        action="https://formsubmit.co/joshuatobackdev@gmail.com"
        method="POST"
        className="form-container"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>

      <h2>Want to discuss further?</h2>
      <p>Contact my email directly instead!</p>
      <a href="mailto:joshuatobackdev@gmail.com">Email Me!</a>
    </Container>
  );
}

export default Contact;
