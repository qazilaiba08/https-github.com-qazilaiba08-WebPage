import React from 'react'
import './Contact.css';

function Contact() {
  return (
   <>
   <div className="container my-5">
    <div className="row">
      <div className="col-lg-6 mb-4">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
           <label for="email" className="form-label" id="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label"id="name">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" required /> 
          </div>
          <div className="mb-3">
            <label for="subject" className="form-label"id="name">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label"id="name">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div className="col-lg-6">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093156!2d144.9556513158446!3d-37.817327442021246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771f1f0b4047d4!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2s!4v1675355417816!5m2!1sen!2s" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</>
)
}
export default Contact