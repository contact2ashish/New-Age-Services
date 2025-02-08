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
      }, 500);
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
         <footer id="footer" class="footer accent-background">
  
         <div class="container footer-top">
         <div class="row gy-4">
         <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
          <span class="sitename">New Age Services.</span>
          </a>
         <p>Transforming Challenges Into Tech Solutions</p>
        <div class="social-links d-flex mt-4">
          <a href=""><i class="bi bi-twitter-x"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
  
      <div class="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
            <li>
                <a onClick={() => navigateToSection("home")} className={activeSection === "home" ? "active" : ""}>Home</a>
            </li>
            <li>
                <a onClick={() => navigateToSection("about")} className={activeSection === "about" ? "active" : ""}>About</a>
            </li>
            <li>
                <a onClick={() => navigateToSection("services")} className={activeSection === "services" ? "active" : ""}>Services</a>
            </li>
            <li>
                <a onClick={() => navigateToSection("contact")} className={activeSection === "contact" ? "active" : ""}>Contact</a>
            </li>
            <li>
              <a onClick={() => navigateToSection("TermsConditions", "/Terms&Conditions/Terms&Conditions")} 
                 className={activeSection === "TermsConditions" ? "active" : ""}>
                Terms & Conditions
              </a>
            </li>
            
            <li>
              <a onClick={() => navigateToSection("PrivacyPolicy", "/privacy")} 
                 className={activeSection === "PrivacyPolicy" ? "active" : ""}>
                Privacy Policy
              </a>
            </li>
            
        </ul>
      </div>
  
      <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p>United States</p>
        <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
        <p><strong>Email:</strong> <span>info@example.com</span></p>
      </div>
  
    </div>
         </div>
  
          <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">New Age Services</strong> <span>All Rights Reserved</span></p>
          </div>
        
        </footer>
      </>
  
    ) 

};




export default Footer