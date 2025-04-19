import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { scroller } from "react-scroll";

const Footer = () => {
      const navigate = useNavigate();
      const [activeSection, setActiveSection] = useState("home"); // State to track the active section


  // Function to Navigate and Scroll to Section
  const navigateToSection = (sectionId, path = "/") => {
    setActiveSection(sectionId);
  
    if (window.location.pathname !== path) {
      navigate(path);
      
      // Delay scrolling to ensure page navigation is complete
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 100,
          offset: -50,
        });
      }, 100);
    } else {
      // Directly scroll if already on the correct page
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 100,
        offset: -50,
      });
    }
  };
  useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "contact"];
            let currentSection = "home";

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
<>
  <footer id="footer" className="footer accent-background">
    <div className="container footer-top d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4">
      
      {/* Left Side: About + Links + Contact Text */}
      <div className="footer-left d-flex flex-column flex-md-row gap-5 flex-grow-1 w-100">
        
        {/* About */}
        <div className="footer-about">
          <div className="logo d-flex align-items-center">
            <strong className="sitename-footer">New Age Services</strong>
          </div>
          <p>Transforming Challenges Into Tech Solutions</p>
          <div className="social-links d-flex mt-4">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            {["home", "about", "services", "contact"].map((section) => (
              <li key={section}>
                <a
                  onClick={() => navigateToSection(section)}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() =>
                  navigateToSection("TermsConditions", "/Terms&Conditions/Terms&Conditions")
                }
                className={activeSection === "TermsConditions" ? "active" : ""}
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateToSection("PrivacyPolicy", "/Privacy&Policy/Privacy&Policy")}
                className={activeSection === "PrivacyPolicy" ? "active" : ""}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Text */}
        <div className="footer-contact-text">
          <h4>Contact Us</h4>
          <p>EKTA Tower</p>
          <p>Block 7A/3, Dakshin Gangotri Supela Bhilai</p>
          <p>Chhattisgarh - 490023</p>
          <p className="mt-3">
            <strong>Phone:</strong> <span>+91 9039096776</span>
          </p>
          <p>
            <strong>Email:</strong> <span>newageservices.in@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Right Side: Map */}
      <div className="footer-map">
        <img
          src="/India office map.jpg"
          alt="Office Map"
          className="map-image"
        />
      </div>
    </div>

    {/* Copyright */}
    <div className="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>
        <strong className="px-1 sitename">New Age Services</strong>
        <span> All Rights Reserved</span>
      </p>
    </div>
  </footer>
</>

  
    ) 

};




export default Footer