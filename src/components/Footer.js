import React from "react";
import "./css/style.css";
import "./css/utilities.css";

function Footer() {
  return (
    <div>
      {/* Footer  */}
      <footer className="footer bg-dark">
        <div className="container grid grid-3">
          <div>
            <h2>Zeroku || 2021</h2>
            <p>Copyright &copy; Kabir Hasan</p>
          </div>
          <div>
            <h3>
              Lets make the world easier <br /> with coding
            </h3>
          </div>
          <div className="social">
            <a href="#">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
