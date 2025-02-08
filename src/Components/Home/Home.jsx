import React, { useEffect,useState } from "react";
import emailjs from "emailjs-com";

import Swiper from 'swiper';
import 'swiper/css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    const swiperConfig = {
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 40 },
        480: { slidesPerView: 3, spaceBetween: 60 },
        640: { slidesPerView: 4, spaceBetween: 80 },
        992: { slidesPerView: 6, spaceBetween: 120 }
      }
    };
  
    const swiper = new Swiper('.swiper-container', swiperConfig);
  
    return () => {
      swiper.destroy(true, true); // Cleanup Swiper instance when component unmounts
    };
  }, []);
  

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    subject: '',
    details: '',
  });

  const [popup, setPopup] = useState({ isVisible: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_dgrn6zn', // Your EmailJS service ID
        'template_kq5y7wd', // Your EmailJS template ID
        formData,
        '-sDgiWCZtkR01d42T' // Your EmailJS public key
      )
      .then(
        (response) => {
          setPopup({
            isVisible: true,
            message: 'Your message has been sent successfully!',
          });
        },
        (err) => {
          setPopup({
            isVisible: true,
            message: 'Failed to send message. Please try again.',
          });
        }
      );
  };

  const closePopup = () => {
    setPopup({ isVisible: false, message: '' });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      date: '',
      subject: '',
      details: '',
    });
  };

  return (
    <>
      <main className="main">
        <section id="home" className="hero section accent-background">
          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5 justify-content-between">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2><span>Welcome to </span><span className="accent">New Age Services</span></h2>
                <p>Transforming Challenges Into Tech Solutions</p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">Get Started</a>
                  {/*<a href="https://www.youtube.com" className="glightbox btn-watch-video d-flex align-items-center">
                    <i className="bi bi-play-circle"></i><span>Watch Video</span>
                  </a>*/}
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <img src="/Main Page img.png" className="img-fluid" alt="Hero" />
              </div>
            </div>
          </div>

         {/* <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                    <div className="icon"><img src="/Understanding Client Needs.jpg" alt=""></img></div>
                    <h4 className="title">Understanding Client Needs</h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                  <div className="icon"><img src="/Tailored Solutions.jpg" alt=""></img></div>
                    <h4 className="title">Tailored Solutions</h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                  <div className="icon"><img src="/Implementation & Support.jpg" alt=""></img></div>
                    <h4 className="title">Implementation & Support</h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                  <div className="icon"><img src="/Continuous Improvements.jpg" alt=""></img></div>
                    <h4 className="title">Continuous Improvements</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
        </section>

        {/*<section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About Us</h2>
            <p>New Age Services stands as a comprehensive IT consulting partner dedicated to empowering organizations with tailored technology solutions.</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3><span>Introduction to </span><span className="accent">New Age Services</span></h3>
                <img src="https://skripsiexpress.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-09-09.28.29-An-image-illustrating-the-concept-of-an-introduction-section-in-a-research-paper.-The-image-features-a-clean-modern-layout-with-central-elements-such.webp" className="img-fluid rounded-4 mb-4" alt="About" />
                
                <p>Our mission is to empower businesses through innovative technology solutions that enhance productivity and ensure seamless operations. We envision a future where every organization can leverage technology to achieve its full potential, fostering growth and resilience.</p>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <div className="content ps-0 ps-lg-5">
                <p>Founded with the vision to bridge the gap between technology and business needs. New Age Services has evolved into a trusted partner for organizations seeking reliable IT solutions. Our commitment to excellence and innovation drives us to continuously adapt to the ever- changing technology landscape.</p>
                
              
                  <div className="position-relative mt-4">
                    <img src="https://skripsiexpress.com/wp-content/uploads/2024/09/DALL%C2%B7E-2024-09-21-10.50.22-A-wide-image-2_1-ratio-representing-the-concept-of-metode-penelitian-skripsi.-The-image-shows-a-student-analyzing-various-research-methods-on-a-la.webp" className="img-fluid rounded-4" alt="About 2" />
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h4>At New Age Services, our core values guide our actions and decisions:</h4>

                  
                  <ul className="core-values-list">
                    <li>
                      <strong>Customer-Centric Approach:</strong> We prioritize our clients' needs, tailoring solutions to meet their unique challenges.
                    </li>
                    <li>
                      <strong>Integrity:</strong> We maintain transparency and honesty in all our dealings, fostering trust and reliability.
                    </li>
                    <li>
                      <strong>Innovation:</strong> We embrace cutting-edge technologies to deliver forward-thinking solutions that drive business success.
                    </li>
                    <li>
                      <strong>Collaboration:</strong> We believe in working closely with our clients, forming partnerships that promote mutual growth.
                    </li>
                    <li>
                      <strong>Trust:</strong> We build strong relationships based on trust, ensuring our clients feel confident in our expertise and support.
                    </li>
                    <li>
                      <strong>Support:</strong> We are dedicated to providing exceptional support, assisting our clients every step of the way to achieve their goals.
                    </li>
                    <li>
                      <strong>Ethics:</strong> We adhere to the highest ethical standards in all our business practices, ensuring fairness and respect.
                    </li>
                    <li>
                      <strong>Commitment:</strong> We are committed to the success of our clients, consistently going above and beyond to help them achieve their objectives.
                    </li>
                  </ul>
                </div>
               </div>
          </div>
        </section>*/}
        <section id="about" className="about section">
        <section className=" about-us-container container text-center py-5">
        <div className="container section-title" data-aos="fade-up" data-aos-delay="100">
            <h2>About Us</h2>
            <p>New Age Services stands as a comprehensive IT consulting partner dedicated to empowering organizations with tailored technology solutions.</p>
          </div>
          
        <div className="row align-items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-md-6">
          <div><h3><span>Introduction to </span><span className="accent">New Age Services</span></h3></div>
            <p>
              In today's fast-paced digital landscape, businesses face numerous challenges, 
              from managing complex IT infrastructures to ensuring data security and optimizing operational efficiency. 
              New Age Services stands as a comprehensive IT consulting partner dedicated to empowering organizations 
              with tailored technology solutions.
            </p>
          </div>
          <div className="col-md-6 about-us-image">
            <img
              src="/Introduction-about.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-us-container bg-light container text-center py-5">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
          
            <p><strong>Background:</strong></p>
            <p>
              Founded with the vision to bridge the gap between technology and business needs, 
              New Age Services has evolved into a trusted partner for organizations seeking reliable IT solutions. 
              Our commitment to excellence and innovation drives us to continuously adapt to the ever-changing technology landscape.
            </p>
            <p><strong>Mission and Vision:</strong></p>
            <p>
              Our mission is to empower businesses through innovative technology solutions that enhance productivity and ensure seamless operations. 
              We envision a future where every organization can leverage technology to achieve its full potential, fostering growth and resilience.
            </p>
          </div>
          <div className="col-md-6 about-us-image">
            <img
              src="/background-about.jpg"
              alt="Introduction"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-us-container container text-center py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h1>Core Values</h1>
            <ul className="list-unstyled text-start">
              <li><strong>Customer-Centric Approach:</strong> We prioritize our clients' needs, tailoring solutions to meet their unique challenges.</li>
              <li><strong>Integrity:</strong> We maintain transparency and honesty in all our dealings, fostering trust and reliability.</li>
              <li><strong>Innovation:</strong> We embrace cutting-edge technologies to deliver forward-thinking solutions that drive business success.</li>
              <li><strong>Collaboration:</strong> We believe in working closely with our clients, forming partnerships that promote mutual growth.</li>
              <li><strong>Trust:</strong> We build strong relationships based on trust, ensuring our clients feel confident in our expertise and support.</li>
              <li><strong>Support:</strong> We are dedicated to providing exceptional support, assisting our clients every step of the way to achieve their goals.</li>
              <li><strong>Ethics:</strong> We adhere to the highest ethical standards in all our business practices, ensuring fairness and respect.</li>
              <li><strong>Commitment:</strong> We are committed to the success of our clients, consistently going above and beyond to help them achieve their objectives.</li>
            </ul>
          </div>
          <div className="col-md-6 about-us-image">
            <img
              src="/core-values-icon.jpg"
              alt="Core Values"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>
      

        <section id="clients" className="clients section">
          <div className="container">
            <div className="swiper-container">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><img src="/Partners/1.png" className="img-fluid" alt="Client 1" /></div>
                <div className="swiper-slide"><img src="/Partners/2.png" className="img-fluid" alt="Client 2" /></div>
                <div className="swiper-slide"><img src="/Partners/3.png" className="img-fluid" alt="Client 3" /></div>
                <div className="swiper-slide"><img src="/Partners/4.png" className="img-fluid" alt="Client 4" /></div>
                <div className="swiper-slide"><img src="/Partners/5.png" className="img-fluid" alt="Client 5" /></div>
                <div className="swiper-slide"><img src="/Partners/6.png" className="img-fluid" alt="Client 6" /></div>
                <div className="swiper-slide"><img src="/Partners/7.png" className="img-fluid" alt="Client 7" /></div>
                <div className="swiper-slide"><img src="/Partners/8.png" className="img-fluid" alt="Client 8" /></div>
                <div className="swiper-slide"><img src="/Partners/9.png" className="img-fluid" alt="Client 3" /></div>
                <div className="swiper-slide"><img src="/Partners/10.png" className="img-fluid" alt="Client 4" /></div>
                <div className="swiper-slide"><img src="/Partners/11.png" className="img-fluid" alt="Client 5" /></div>
                <div className="swiper-slide"><img src="/Partners/12.png" className="img-fluid" alt="Client 6" /></div>
                <div className="swiper-slide"><img src="/Partners/13.png" className="img-fluid" alt="Client 7" /></div>
                <div className="swiper-slide"><img src="/Partners/14.png" className="img-fluid" alt="Client 8" /></div>
              </div>
            </div>
          </div>
        </section>
        </section>


      <section id="services" className="services section">
  
  
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>New Age Services offers a comprehensive suite of IT solutions designed to meet the diverse needs of modern enterprises. Our services are categorized into several key areas:</p>
        </div>
        <div className="container">
  
          <div className="row justify-content-center row gy-4">
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <h3>IT Consulting</h3>
                <p>Our IT consulting services help businesses identify areas for improvement and develop strategic technology plans. We assess current systems, recommend best practices, and align technology with business goals to enhance efficiency and performance.</p>
                <Link to="/Services/Services#ITConsulting" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <h3>Connectivity Solutions</h3>
                <p>Includes services that help businesses connect to the internet and optimize their networks:</p>
                <Link to="/Services/Services#ConnectivitySolutions" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <h3>Communication Solutions</h3>
                <p>This includes services focused on voice communication, telephony, and conferencing:</p>
                <Link to="/Services/Services#CommunicationSolutions" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <h3>Security Solutions</h3>
                <p>The security services are designed to protect your business from evolving cyber threats.</p>
                <Link to="/Services/Services#SecuritySolutions" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h3>Data Storage and Infrastructure</h3>
                <p>This category encompasses the storage and infrastructure management services that businesses use for data and IT operations:</p>
                <Link to="/Services/Services#DataStorage" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
  

  
          </div>
  
        </div>
  
      </section>


       <section id="contact" className="contact section">
      
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Get in touch with us for any inquiries, and we'll be happy to assist you!</p>
          </div>
    
          <div className="container" data-aos="fade-up" data-aos-delay="100">
    
            <div className="row gx-lg-0 gy-4">
    
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
    
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
    
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
    
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                    <i className="bi bi-clock flex-shrink-0"></i>
                    <div>
                      <h3>Open Hours:</h3>
                      <p>Mon-Sat: 11AM - 23PM</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
              <div className="col-lg-8">
                <form onSubmit={handleSubmit} method="post" className="email-form" data-aos="fade" data-aos-delay="100">
                  <div className="row gy-4">
    
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required></input>
                    </div>
    
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email"  value={formData.email} onChange={handleChange} required></input>
                    </div>
                    <div className="col-md-6 ">
                      <input type="text" className="form-control" name="phone" placeholder="Mobile No."  value={formData.phone} onChange={handleChange} required></input>
                    </div>
                    <div className="col-md-6 ">
                      <input type="text" className="form-control" name="location" placeholder="Your location"  value={formData.location} onChange={handleChange} required></input>
                    </div>
    
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject"  value={formData.subject} onChange={handleChange} required></input>
                    </div>
    
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="8" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
    
                    <div className="col-md-12 text-center">  
                      <button type="submit">Send Message</button>
                    </div>
    
                  </div>
                </form>
              </div>
            </div>
    
          </div>
          <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </section>
          {popup.isVisible && (
            <div className="popup-overlay">
              <div className="popup-content">
                <p>{popup.message}</p>
                <button onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
      </main>
    </>
  );
}

export default Home;
