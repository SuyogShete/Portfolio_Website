import React from "react";
import "./Projects.css";
import react_logo from "../../assets/react_logo.png";
import angular_logo from "../../assets/angular_logo.png";
import flutter_logo from "../../assets/flutter_logo.png";
const Projects = () => {
  return (
    <div id="container-projects">
      <h3 class="title">Projects</h3>
      <div class="container-project-cards">
        <div class="card">
          <div class="face face1">
            {/* <h2>JAMES BOND</h2> */}
            <img src={react_logo}></img>
            <p>
            Explore my GitHub repository to discover a collection of innovative React projects. 
            </p>
            <a href="https://github.com/SuyogShete?tab=repositories" target="_blank">Github</a>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            {/* <h2>JAMES BOND</h2> */}
            <img src={angular_logo}>

            </img>
            <p>
            Explore my GitHub repository to discover a collection of innovative Angular projects. 
            </p>
            <a href="https://github.com/SuyogShete?tab=repositories" target="_blank">Github</a>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            {/* <h2>JAMES BOND</h2> */}
            <img src={flutter_logo}></img>
            <p>
            Explore my GitHub repository to discover a collection of innovative Flutter projects.
            </p>
            <a href="https://github.com/SuyogShete?tab=repositories" target="_blank">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
