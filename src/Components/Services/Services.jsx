import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const communicationSolutions = [
  {
    title: "PRI",
    description: "A robust telephony solution designed to handle large volumes of incoming and outgoing calls.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/328731966/HM/PU/LC/104504330/pri-lines-service-500x500.jpg"
  },
  {
    title: "SIP Trunk",
    description: "VoIP-based phone services that replace traditional telephony lines, offering cost-efficiency and flexibility.",
    image: "https://gardoon.io/wp-content/uploads/2020/06/icon-sip-e1592574266102.png"
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
    image: "https://i.pinimg.com/736x/ad/35/86/ad35869bcc7afda9836e3335cb766886.jpg"
  },
  {
    title: "MPLS",
    description: "Secure and efficient data transfer across multiple locations, ensuring optimal network performance.",
    image: "https://global.discourse-cdn.com/spiceworks/original/4X/d/3/7/d373e81b22eb61ad42a8603739da5634c6beaf78.jpeg"
  },
  {
    title: "SD-WAN",
    description: "A software-based solution that optimizes wide-area network performance through intelligent routing.",
    image: "https://blog.consoleconnect.com/hubfs/MPLS%20SDWAN.png"
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

const Services = () => {
  const location = useLocation();

  useEffect(() => {
      if (location.hash) {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
              element.scrollIntoView({ behavior: "smooth" });
          }
      }
  }, [location]);

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
           <Link to="/contact">
             <button className="btn btn-primary mt-3">Contact us to learn more</button>
           </Link>
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
                </div>
              </div>
            ))}
          </div>
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
                </div>
              </div>
            ))}
          </div>
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
                </div>
              </div>
            ))}
          </div>
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
            <Link to="/contact">
              <button className="btn btn-primary mt-3">Contact us to learn more</button>
            </Link>
          </div>
         </div>

      </div>
</section>
    </div>

  );
};

export default Services;
