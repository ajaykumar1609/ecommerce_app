import React from "react";
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h3>Our Policies</h3>
            <ul>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies Policy</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f">Facebook</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter">Twitter</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram">Instagram</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2">
          <div className="col-sm-6">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Shopee Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
