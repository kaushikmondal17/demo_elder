import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="footer animate-on-scroll">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="logo_footer">
          <img src="images/Logo.png" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed distinctio quae quas placeat
            aspernatur perspiciatis non modi at quibusdam doloribus.</p>
          <div className="footer_social_icon">
            <i className="fa-brands fa-whatsapp" />
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-twitter" />
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="information_footer">
          <h4>information</h4>
          <ul>
            <li><a href="#">New Product</a></li>
            <li><a href="#">Top Seller</a></li>
            <li><a href="#">Ore Blog</a></li>
            <li><a href="#">Ore Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="contact_footer">
          <h4>Contact Us</h4>
          <p> <i className="fa-solid fa-location-dot" />123 Main Street, City, Country</p>
          <p><i className="fa-solid fa-phone" /> +1234567890</p>
          <p><i className="fa-solid fa-envelope-circle-check" /> info@eldepharma.com</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="footer_newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
          <div className="form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="pay_img_section">
            <h5>We Accept</h5>
            <div className="pay_img">
              <img src="images/visa.png" alt="Mastercard" />
              <img src="images/Mastercard-PNG-Photos.png" alt="Visa" />
              <img src="images/visa.png" alt="Mastercard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bottom_footer">
    <p>© 2024 Eldepharma.</p>
    <p> All rights reserved.</p>
  </div></footer>


    </div>
  )
}

export default Footer
