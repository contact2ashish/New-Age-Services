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
  
      <div className="container footer-top">
        <div className="row gy-4">
          
          {/* Footer About Section */}
          <div className="col-lg-5 col-md-12 footer-about">
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

          {/* Useful Links Section */}
          <div className="col-lg-2 col-6 footer-links">
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
                  onClick={() => navigateToSection("PrivacyPolicy", "/privacy")}
                  className={activeSection === "PrivacyPolicy" ? "active" : ""}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span>newageservices.in@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
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