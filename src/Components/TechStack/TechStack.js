
import React from "react";
import "./TechStack.css";
import checkmark from "../../assets/checkmark.png";
const TechStack = () => {
  return (
    <section id="experience">
        <h3 class="title">Tech Stack</h3>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">FrontEnd Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Angular JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>BOOTSTRAP</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">BackEnd Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Firebase</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default TechStack;
