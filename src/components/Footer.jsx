import React from 'react'

function Footer() {
  return (
   <>
   <footer >
    <div className="container bg-white text-dark pt-4">
      <div className="row">
     
        <div className="col-md-4 mb-4">
          <h5>About Us</h5>
          <p>
            We are committed to providing the best products and services to our customers. Our mission is to ensure satisfaction and quality in everything we do.
          </p>
        </div>
        
      
        <div className="col-md-4 mb-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled " >
            <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
            <li><a href="#" className="text-dark text-decoration-none">About</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Services</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-md-4 mb-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, City</li>
            <li><i className="bi bi-envelope-fill me-2"></i>info@example.com</li>
            <li><i className="bi bi-telephone-fill me-2"></i>+123-456-7890</li>
          </ul>
        </div>
        
      </div>
      
      <hr className="bg-secondary"/>
      
      <div className="d-flex justify-content-between">
        <div>
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
        </div>
        <p className="mb-0">&copy; 2024 Created by LAIBA QAZI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</>
  )
}

export default Footer