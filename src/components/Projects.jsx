import { Link } from "react-router-dom";

import projectbannerawtlet from "/assets/project-banner-awtlet.png";
import projectbannerlaurus from "/assets/project-banner-laurus.png";
import projectbannersixthentryold from "/assets/project-banner-sixthentryold.png";
// import projectbannerartouch from "/assets/project-banner-artouch.png";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1>
          <span className="accent-projects">P</span>ROJECTS
        </h1>

        <section className="projects-list">
          <ul>
            <li>
              <div className="projects-title">
                <span className="accent-projects">A</span>ssassins Want to Learn
                English, Too!
              </div>
              <div>
                <img
                  src={projectbannerawtlet}
                  className="projects-img"
                  alt="Assassins Want to Learn English, Too!"
                />
              </div>
              <div className="projects-date"> 2015-now</div>
              <div className="projects-info">
                A cute bilingual (English/Japanese) comic about an assassin and
                her English teacher.
              </div>
              <div className="projects-see-more">
                <span className="projects-link">
                  <a href="https://pipmurphy.com/awtlet/" target="_blank">
                    SEE MORE
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="projects-title">
                <span className="accent-projects">V</span>isit Laurus Island
              </div>
              <div>
                <img
                  src={projectbannerlaurus}
                  className="projects-img"
                  alt="Visit Laurus Island"
                />
              </div>
              <div className="projects-date"> 2016-now</div>
              <div className="projects-info">
                A travel website for the fictional country of Laurus Island, the
                setting for some of my books.
              </div>
              <div className="projects-see-more">
                <span className="projects-link">
                  <a href="http://laurusisland.com" target="_blank">
                    SEE MORE
                  </a>
                </span>
              </div>
            </li>

            {/* <li>
              <div className="projects-title">
                <span className="accent-projects">A</span>RTouch ☜
              </div>
              <div>
                <img
                  src={projectbannerartouch}
                  className="projects-img"
                  alt="ARTouch ☜"
                />
              </div>
              <div className="projects-date"> 2025</div>
              <div className="projects-info">
                A web app that allows users to
                search, view and create curated exhibitions of artworks from <span className="italics">the Rijksmuseum</span>, Amsterdam and <span className="italics">the Cleveland Museum of Art</span>,
                Ohio.
              </div>
              <div className="projects-see-more">
                <span className="projects-link">
                  <a href="https://pipmurphy.com/artouch" target="_blank">
                    SEE MORE
                  </a>
                </span>
              </div>
            </li> */}

            <li>
              <div className="projects-title">
                <span className="accent-projects">S</span>ixth Entry
              </div>
              <div>
                <img
                  src={projectbannersixthentryold}
                  className="projects-img"
                  alt="Sixth Entry"
                />
              </div>
              <div className="projects-date"> 2013</div>
              <div className="projects-info">
                A short puzzle adventure game about 6 people who wake up in a
                mysterious place, made in RPG Maker VX.
              </div>
              <div className="projects-see-more">
                <span className="projects-link">
                  <Link to="/projects/sixthentryold">SEE MORE</Link>
                </span>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Projects;
