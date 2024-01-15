import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div id="#container-service">
      <h3 class="title">Experience</h3>
      <div className="services-container">
        <div className="services-list-container">
          <div className="service-item-container">
            <div className="services-item">
              <i className="fa-solid fa-code"></i>
              <div className="item-desc">
                <h3>Web Development</h3>
                <p>
                  I have hands-on experience with building robust and scalable
                  web applications. Utilizing MongoDB for efficient data
                  management, Express.js for server-side development, and
                  Node.js for server runtime, I have developed dynamic and
                  responsive applications. In the MEAN stack, I have
                  incorporated Angular for client-side functionality, while in
                  the MERN stack, I've leveraged React to create interactive
                  user interfaces.
                </p>
              </div>
            </div>
            <div className="services-item">
              <i className="fa-solid fa-desktop"></i>
              <div className="item-desc">
                <h3>Application Development</h3>
                <p>
                  I have hands-on experience in crafting cross-platform flutter
                  mobile applications development. Leveraging Flutter's
                  framework, I contributed to the development of intuitive and
                  visually appealing user interfaces. My responsibilities
                  included implementing responsive design principles,
                  integrating API functionalities, and ensuring seamless
                  performance across both iOS and Android operating platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
