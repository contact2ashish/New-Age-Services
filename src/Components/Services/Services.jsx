import React from "react";
import { useEffect , useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Modal from "./Modal";


const communicationSolutions = [
  {
    title: "PRI",
    description: "A robust telephony solution designed to handle large volumes of incoming and outgoing calls.",
    image: "/PRI.jpg"
  },
  {
    title: "SIP Trunk",
    description: "VoIP-based phone services that replace traditional telephony lines, offering cost-efficiency and flexibility.",
    image: "/SIP Trunk.png"
  },
  {
    title: "Toll-Free",
    description: "Provide businesses with toll-free calling options, enhancing customer accessibility and service.",
    image: "/TollFree.jpg"
  },
  {
    title: "Video Conferencing",
    description: "High-quality virtual meeting solutions to connect teams, clients, and partners, fostering collaboration in a remote world.",
    image: "/VideoConference.jpg"
  }
];

const solutions = [
  {
    title: "Broadband",
    description: "High-speed internet connectivity with flexible bandwidth options to meet diverse business needs.",
    image: "/Broadband.jpg"
  },
  {
    title: "Internet Leased Line",
    description: "A dedicated, high-speed internet connection that offers reliable and consistent performance.",
    image: "/Internet Leased Line.jpg"
  },
  {
    title: "MPLS",
    description: "Secure and efficient data transfer across multiple locations, ensuring optimal network performance.",
    image: "/MPLS.jpg"
  },
  {
    title: "SD-WAN",
    description: "A software-based solution that optimizes wide-area network performance through intelligent routing.",
    image: "/SD-WAN.jpg"
  }
];

const securitysolutions = [
  {
    title: "Antivirus Solutions",
    description: "Robust protection against malware, viruses, and other security threats.",
    image: "/Antivirus.jpg"
  },
  {
    title: "Firewall",
    description: "Advanced firewall solutions to monitor and protect your network from unauthorized access.",
    image: "/firewall.jpg"
  },
  {
    title: "Surveillance",
    description: "Integrated physical security systems to monitor and protect your premises.",
    image: "/Surveillance.jpg"
  },
  {
    title: "Biometrics",
    description: "Cutting-edge biometric security solutions for secure access control and authentication.",
    image: "/Biometrics.jpg"
  }
];

// Separate Modal Details for Each Solution

const modalDetails = {
  "PRI": {
    extraInfo: "PRI (Primary Rate Interface) provides dedicated voice channels for businesses. It enables seamless and high-quality voice communication over ISDN lines.",
    features: ["Up to 30 voice channels per connection", "Clear, reliable call quality", "Supports both incoming and outgoing calls"],
    useCases: ["Call centers", "Enterprises with high call volume", "Banks and financial services"],
    benefits: ["High call capacity", "Improved voice clarity", "Secure and reliable communication"]
  },
  "SIP Trunk": {
    extraInfo: "SIP Trunking replaces traditional telephone lines using the internet, reducing costs while improving flexibility and scalability.",
    features: ["Scalable VoIP-based communication", "Seamless integration with PBX systems", "Cost-effective international calling"],
    useCases: ["Remote teams", "Multi-location businesses", "Cost-conscious enterprises"],
    benefits: ["Reduced telephony costs", "Flexible call routing", "Supports remote and hybrid workforces"]
  },
  "Toll-Free": {
    extraInfo: "Toll-free numbers allow customers to reach businesses without incurring call charges, enhancing accessibility and service quality.",
    features: ["Nationwide accessibility", "Easy-to-remember numbers", "Supports IVR and call forwarding"],
    useCases: ["Customer support centers", "Helplines and emergency services", "E-commerce businesses"],
    benefits: ["Better customer engagement", "Enhanced brand credibility", "Increased lead generation"]
  },
  "Video Conferencing": {
    extraInfo: "Video conferencing tools provide HD video and audio solutions for virtual meetings, enabling real-time collaboration.",
    features: ["HD video and audio clarity", "Screen sharing and chat options", "Multi-device compatibility"],
    useCases: ["Remote work", "Client meetings", "Online training and webinars"],
    benefits: ["Reduced travel costs", "Improved team collaboration", "Enhanced communication efficiency"]
  },
  "Broadband": {
    extraInfo: "Broadband provides high-speed internet connectivity with flexible plans tailored for businesses of all sizes.",
    features: ["High-speed data transmission", "Various bandwidth options", "Reliable and stable connection"],
    useCases: ["Small and medium businesses", "Retail outlets and offices", "Remote work setups"],
    benefits: ["Affordable and flexible plans", "Quick deployment and easy setup", "Consistent and uninterrupted connectivity"]
  },
  "Internet Leased Line": {
    extraInfo: "A dedicated internet connection that ensures stable and high-speed network performance for business-critical applications.",
    features: ["Dedicated bandwidth", "Symmetrical upload/download speeds", "24/7 monitoring and support"],
    useCases: ["Large enterprises requiring constant uptime", "Data centers and cloud applications", "Businesses with high data transfer needs"],
    benefits: ["Uninterrupted, reliable connectivity", "Secure and private data transmission", "Improved business efficiency"]
  },
  "MPLS": {
    extraInfo: "MPLS is a secure, high-performance networking solution designed for businesses with multiple locations.",
    features: ["Fast and secure data transfer", "Low latency and packet loss", "Prioritized traffic for critical applications"],
    useCases: ["Multi-branch companies", "Financial institutions", "Healthcare networks"],
    benefits: ["Improved network efficiency", "Seamless site-to-site connectivity", "Reduced downtime and better security"]
  },
  "SD-WAN": {
    extraInfo: "SD-WAN optimizes network performance using intelligent routing to enhance business connectivity.",
    features: ["Centralized network control", "Real-time traffic optimization", "Secure connectivity across multiple locations"],
    useCases: ["Enterprises with remote branches", "Cloud-based businesses", "IT-driven industries"],
    benefits: ["Cost-effective compared to MPLS", "Better application performance", "Enhanced security and scalability"]
  },
  "Antivirus Solutions": {
    extraInfo: "Comprehensive cybersecurity software to safeguard devices from viruses, malware, and cyber threats.",
    features: ["Real-time threat detection", "Automatic updates for latest threats", "Multi-device protection"],
    useCases: ["Businesses handling sensitive data", "Individuals needing robust cybersecurity", "IT environments requiring endpoint security"],
    benefits: ["Prevents cyberattacks and data breaches", "Enhances system performance and stability", "Protects business continuity"]
  },
  "Firewall": {
    extraInfo: "A security system that monitors and controls incoming and outgoing network traffic based on predefined security rules.",
    features: ["Intrusion prevention system (IPS)", "Deep packet inspection", "VPN support for secure remote access"],
    useCases: ["Enterprises requiring secure network access", "Data centers and cloud environments", "Financial and government institutions"],
    benefits: ["Strong defense against cyber threats", "Secure and controlled data access", "Reduces risk of unauthorized access"]
  },
  "Surveillance": {
    extraInfo: "A security solution that integrates CCTV and advanced monitoring systems to protect businesses and properties.",
    features: ["High-resolution video recording", "Motion detection and alerts", "Cloud storage and remote access"],
    useCases: ["Retail stores and shopping malls", "Office spaces and warehouses", "Smart homes and gated communities"],
    benefits: ["Enhanced security and monitoring", "Deters theft and unauthorized access", "Remote access for real-time surveillance"]
  },
  "Biometrics": {
    extraInfo: "Advanced biometric security systems using fingerprints, facial recognition, and iris scanning for secure authentication.",
    features: ["Contactless and secure authentication", "Fast and accurate identification", "Integration with access control systems"],
    useCases: ["Corporate offices and government agencies", "High-security zones and research facilities", "Time and attendance tracking systems"],
    benefits: ["Eliminates unauthorized access", "Reduces identity fraud risks", "Enhances overall security efficiency"]
  }
};

const Services = () => {
  const [open, setOpen] =  useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home"); // State to track the active section

  useEffect(() => {
      if (location.hash) {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
              element.scrollIntoView({ behavior: "smooth" });
          }
      }
  }, [location]);

  
  
    // Function to Navigate and Scroll to Section
    const navigateToSection = (sectionId, path = "/") => {
      setActiveSection(sectionId);
    
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 100,
          offset: -50,
        });
      }, 100);
      };

      const handleOpen = (solution) => {
        setSelectedSolution(solution);
        setOpen(true);
      };
    
      const handleClose = () => {
        setSelectedSolution(null);
        setOpen(false);
      };

  return (
    <div className="main-content"> {/* Wrapper for content */}
    <section id = "ITConsulting">
      <div className="container-fluid it-consulting-container position-relative text-white">
         <div className="background-image position-absolute w-100 h-100">
           <div className="overlay position-absolute w-100 h-100"></div>
         </div>
         <div className="box-container">
         <div className="container position-relative text-center py-5">
           <h1 className="fw-bold">IT Consulting</h1>
           <p className="lead">
             Our IT consulting services help businesses identify areas for improvement and develop strategic technology plans.
           </p>
           <p>
             We assess current systems, recommend best practices, and align technology with business goals to enhance efficiency and performance.
           </p>
              <button className="button" onClick={() => navigateToSection("contact")} >
              Contact Us To Know More...
              </button>
         </div>
         </div>

      </div>
</section>
      <section id = "CommunicationSolutions">
        <div className="communication-solutions-container container mb-5">
          <div className="titlebox text-center mb-5">
            <h1>Communication Solutions</h1>
            <p>Services focused on voice communication, telephony, and conferencing:</p>
          </div>

          <div className="row">
            {communicationSolutions.map((solution, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="solution-card text-center">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="solution-image img-fluid mb-3"
                  />
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                  <button className="button" type="button" onClick={() => handleOpen(solution)} >
                   Know More...
                  </button>
                </div>
              </div>
            ))}
            
          </div>
          {/* Modal */}
        {selectedSolution && (
        <Modal isOpen={open} onClose={handleClose}>
          <div className="modal-content">
            <h2>{selectedSolution.title}</h2>
            <img
              src={selectedSolution.image}
              alt={selectedSolution.title}
            />
            <p>{modalDetails[selectedSolution.title].extraInfo}</p>
            
            <h6>Key Features:</h6>
            <ul>
              {modalDetails[selectedSolution.title].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h6>Common Use Cases:</h6>
            <ul>
              {modalDetails[selectedSolution.title].useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>

            <h6>Benefits:</h6>
            <ul>
              {modalDetails[selectedSolution.title].benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
        </div>
        
      </section>

      <section id = "ConnectivitySolutions">
        <div className="connectivity-solutions-container container mb-5">
          <div className="titlebox text-center mb-5">
            <h1>Connectivity Solutions</h1>
            <p>Includes services that help businesses connect to the internet and optimize their networks:</p>
          </div>

          <div className="row">
            {solutions.map((solution, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="solution-card text-center">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="solution-image img-fluid mb-3"
                  />
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                  <button className="button" type="button" onClick={() => handleOpen(solution)} >
                   Know More...
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Modal */}
        {selectedSolution && (
        <Modal isOpen={open} onClose={handleClose}>
          <div className="modal-content">
            <h2>{selectedSolution.title}</h2>
            <img
              src={selectedSolution.image}
              alt={selectedSolution.title}
            />
            <p>{modalDetails[selectedSolution.title].extraInfo}</p>
            
            <h6>Key Features:</h6>
            <ul>
              {modalDetails[selectedSolution.title].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h6>Common Use Cases:</h6>
            <ul>
              {modalDetails[selectedSolution.title].useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>

            <h6>Benefits:</h6>
            <ul>
              {modalDetails[selectedSolution.title].benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
        </div>
      </section>

      <section id = "SecuritySolutions">
        <div className="security-solutions-container container mb-5">
          <div className="titlebox text-center mb-5">
            <h1>Security Solutions</h1>
            <p>The security services are designed to protect your business from evolving cyber threats:</p>
          </div>

          <div className="row">
            {securitysolutions.map((solution, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="solution-card text-center p-3 border">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="solution-image img-fluid mb-3"
                  />
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                  <button className="button" type="button" onClick={() => handleOpen(solution)} >
                   Know More...
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Modal */}
        {selectedSolution && (
        <Modal isOpen={open} onClose={handleClose}>
          <div className="modal-content">
            <h2>{selectedSolution.title}</h2>
            <img
              src={selectedSolution.image}
              alt={selectedSolution.title}
            />
            <p>{modalDetails[selectedSolution.title].extraInfo}</p>
            
            <h6>Key Features:</h6>
            <ul>
              {modalDetails[selectedSolution.title].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h6>Common Use Cases:</h6>
            <ul>
              {modalDetails[selectedSolution.title].useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>

            <h6>Benefits:</h6>
            <ul>
              {modalDetails[selectedSolution.title].benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
        </div>
      </section>
      <section id = "DataStorage">
      <div className="container-fluid Data-Storage-container position-relative text-white">
         <div className="background-image position-absolute w-100 h-100">
           <div className="overlay position-absolute w-100 h-100"></div>
         </div>
         <div className="box-container">
          <div className="container position-relative text-center py-5">
            <h1 className="fw-bold">Data Storage and Infrastructure</h1>
            <p className="lead">
            This category encompasses the storage and infrastructure management services that businesses use for data and IT operations.
            </p>
            <button className="button" onClick={() => navigateToSection("contact")} >
              Contact Us To Know More...
              </button>
          </div>
         </div>
      </div>
</section>
    <section id = "CyberSecurity">
          <div className="container-fluid Cyber-Security position-relative text-white">
             <div className="background-image position-absolute w-100 h-100">
               <div className="overlay position-absolute w-100 h-100"></div>
             </div>
             <div className="box-container">
              <div className="container position-relative text-center py-5">
                <h1 className="fw-bold">Cyber Security</h1>
                <p className="lead">
                Protecting Your Data, 24/7 Advanced threat detection and prevention to keep your systems secure.We safeguard your digital world so you can focus on what matters.
                </p>
                <button className="button" onClick={() => navigateToSection("contact")} >
                  Contact Us To Know More...
                  </button>
              </div>
             </div>
          </div>
    </section>
    </div>

  );
};

export default Services;
