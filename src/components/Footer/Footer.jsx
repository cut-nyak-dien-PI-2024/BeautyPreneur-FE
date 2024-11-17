import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="primaryText">Tentang Beauty Preneur</span>
          <span className="secondaryText">
            Meet Our Team, and lets to know about us! Kita berkomitmen untuk membantu perempuan mendapatkan keahlian Make Up yang memiliki peluang besar untuk manfaat diri sendiri serta ekonomi.
          </span>

          <div className="flexColStart contactModes">
            {/* Profile 1 */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter">
                    <img src="./kak uci.png" alt="kak uci" width={100} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Uci Chantrinada
                    </span>
                    <span className="secondaryText">
                      Frontend Developer
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="ucichatrinada@gmail.com">
                    Contact Now
                  </a>
                </div>
              </div>

              {/* Profile 2 */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter">
                    <img src="./sabrintsya.jpg" alt="sabrintsya" width={100} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Sabrina Natasya Bilbina
                    </span>
                    <span className="secondaryText">
                      Frontend Developer
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.linkedin.com/in/sabrina-natasya-bilbina/">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter">
                    <img src="./kak windi.png" alt="kak windi" width={100} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Windi Al Azmi
                    </span>
                    <span className="secondaryText">
                      Backend Developer
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.linkedin.com/in/windialazmi">
                    Contact Now
                  </a>
                </div>
              </div>

              {/* Profile 4 */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter">
                    <img src="./kak anna.png" alt="kak anna" width={100} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Erwiana Anggriani
                    </span>
                    <span className="secondaryText">
                      Backend Developer
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.linkedin.com/in/erwiana-anggriani">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
              <img src="./logo.png" alt="logo" width={200} />
              <span className="secondaryText">MAKEUP MONEY MAKE IT HAPPEN</span>
            </div>
            <div className="flexColStart c-right pinkText">
              {/* Social side */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-twitter"></span>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-instagram"></span>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-linkedin-in"></span>
              </a>
               {/* Navbar side */}
              <div className="flexCenter c-menu secondaryText">
              <Link to="/">Home</Link>
              <Link to="/kursus">Kelas</Link>
              <Link to="/makeup-budget-list">Makeup Budget List</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Footer;
