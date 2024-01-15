import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><a href="#header-container">About</a></li>
                <li><a href="#container-service">Experience</a></li>
                <li><a href="#experience">Tech Stack</a></li>
                <li><a href="#container-projects">Projects</a></li>
                <li><a href="#container-footer">Contact Me</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
