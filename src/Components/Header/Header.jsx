import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import "../../assets/Main.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const mobileNavBtnRef = useRef(null);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  // Mobile Navigation Toggle
  useEffect(() => {
    const mobileNavBtn = mobileNavBtnRef.current;
    const navLinks = document.querySelectorAll(".navmenu a");

    if (!mobileNavBtn) return;

    const mobileNavToggle = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavBtn.classList.toggle("bi-list");
      mobileNavBtn.classList.toggle("bi-x");
    };

    const closeMobileNav = () => {
      document.body.classList.remove("mobile-nav-active");
      mobileNavBtn.classList.add("bi-list");
      mobileNavBtn.classList.remove("bi-x");
    };

    mobileNavBtn.addEventListener("click", mobileNavToggle);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileNav(); // Close menu when clicking a nav item
      });
    });

    return () => {
      mobileNavBtn.removeEventListener("click", mobileNavToggle);
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeMobileNav);
      });
    };
  }, []);

  useEffect(() => {
    console.log("Header component mounted");

    // Toggle Scrolled Class on Scroll
    const toggleScrolled = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 100);
    };
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Scroll to top functionality
    let scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
      }
    };

    scrollTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    // Preloader Removal
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => preloader.remove());
    }

    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Initialize GLightbox
    GLightbox({ selector: ".glightbox" });

    // Initialize Isotope
    document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
      let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";

      imagesLoaded(isotopeItem.querySelector(".isotope-container"), () => {
        let initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
        });

        isotopeItem.querySelectorAll(".isotope-filters li").forEach((filterItem) => {
          filterItem.addEventListener("click", function () {
            isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({ filter: this.getAttribute("data-filter") });
          });
        });
      });
    });

    // FAQ Item Toggle
    document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle").forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

    // Handle Page Load Hash Scroll
    window.addEventListener("load", () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            let scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop);
            window.scrollTo({ top: section.offsetTop - scrollMarginTop, behavior: "smooth" });
          }, 100);
        }
      }
    });

    // Navmenu Scrollspy
    const navmenuScrollspy = () => {
      document.querySelectorAll(".navmenu a").forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      document.removeEventListener("scroll", navmenuScrollspy);
      document.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  // Function to Navigate and Scroll to Section
  const navigateToSection = (section) => {
    setActiveSection(section);
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 100,
        offset: -50,
      });
    }, 100);
  };

  return (
    <header id="header" className="header fixed-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a onClick={() => navigateToSection("hero")} className="logo d-flex align-items-center">
            <img src="\MAIN LOGO.jpg" alt="main-logo" />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a onClick={() => navigateToSection("home")} className={activeSection === "home" ? "active" : ""}>Home</a></li>
              <li><a onClick={() => navigateToSection("about")} className={activeSection === "about" ? "active" : ""}>About</a></li>
              <li><a onClick={() => navigateToSection("services")} className={activeSection === "services" ? "active" : ""}>Services</a></li>
              <li><a onClick={() => navigateToSection("contact")} className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
            </ul>
            <i ref={mobileNavBtnRef} className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
