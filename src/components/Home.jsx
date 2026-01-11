import { Link } from "react-router-dom";

import pipimg from "/assets/piptop.jpg";

import adawtlet from "/assets/pipbanneradsawtlet.png";
import adca from "/assets/pipbanneradsca.png";

import contactbluesky from "/assets/icon-bluesky.svg";
import contactfacebook from "/assets/icon-facebook.svg";
import contactinstagram from "/assets/icon-instagram.svg";
import contactlinkedin from "/assets/icon-linkedin.svg";
import contactthreads from "/assets/icon-threads.svg";
import contactyoutube from "/assets/icon-youtube.svg";

const Home = () => {
  return (
    <>
      <section className="home">
        <section className="home-1">
          <img src={pipimg} alt="Pip Murphy" className="pip-img" />
        </section>

        <section className="home-2">
          <h2>
            Hello! I'm <span className="accent-home">Pip</span> Murphy.
          </h2>
          <p>
            I write children's books and bilingual comics (Japanese/English).
            <br />
            Feel free to check in to keep up to date with my latest releases and
            events!
          </p>

          <h1>
            <span className="accent-home">H</span>IGHLIGHTS
          </h1>

          <div className="banad-box">
            <a href="https://pipmurphy.com/awtlet/" target="_blank">
              <img
                src={adawtlet}
                alt="Assassins Want to Learn English, Too!"
                className="banad"
              />
            </a>

            <Link to="/christieandagatha/book1">
              <img
                src={adca}
                alt="Christie and Agatha's Detective Agency"
                className="banad"
              />
            </Link>
          </div>

          <section className="contact">
            <h1>
              <span className="accent-home">C</span>ONTACT
            </h1>

            <p>
              <span className="strong">Email: </span> pipmurphyauthor@gmail.com
            </p>

            <div className="contact-icons">
              <span className="icons-box">
                <a
                  href="https://bsky.app/profile/pipmurphy.bsky.social"
                  target="_blank"
                >
                  <img
                    src={contactbluesky}
                    alt="Bluesky"
                    className="icons"
                    id="icon1"
                  />
                </a>
              </span>
              <span className="icons-box">
                <a
                  href="https://www.facebook.com/PipMurphyAuthor/"
                  target="_blank"
                >
                  <img
                    src={contactfacebook}
                    alt="Facebook"
                    className="icons"
                    id="icon2"
                  />
                </a>
              </span>
              <span className="icons-box">
                <a
                  href="https://www.instagram.com/PipMurphyAuthor/"
                  target="_blank"
                >
                  <img
                    src={contactinstagram}
                    alt="Instagram"
                    className="icons"
                    id="icon3"
                  />
                </a>
              </span>
              <span className="icons-box">
                <a
                  href="https://www.linkedin.com/in/pip-murphy-b71b08228/"
                  target="_blank"
                >
                  <img
                    src={contactlinkedin}
                    alt="LinkedIn"
                    className="icons"
                    id="icon4"
                  />
                </a>
              </span>
              <span className="icons-box">
                <a
                  href="https://www.threads.com/@pipmurphyauthor"
                  target="_blank"
                >
                  <img
                    src={contactthreads}
                    alt="Threads"
                    className="icons"
                    id="icon5"
                  />
                </a>
              </span>
              <span className="icons-box">
                <a href="https://www.youtube.com/@pipmurphy" target="_blank">
                  <img
                    src={contactyoutube}
                    alt="Youtube"
                    className="icons"
                    id="icon6"
                  />
                </a>
              </span>
            </div>
          </section>

          <section className="upcoming">
            <h1>
              <span className="accent-home">U</span>PCOMING
            </h1>
            <p>
              <p>
                <span className="upcomingbutton">BOOK</span>{" "}
                <span className="strong">14th May 2026</span> -{" "}
                <span className="italics">A Curious Catastrophe </span>{" "}
                (Christie and Agatha Book 8) released
              </p>
              <span className="upcomingbutton">BOOK</span>{" "}
              <span className="strong">15th May 2026</span> -{" "}
              <span className="italics">
                Detektivagentur Christie & Agatha – Entführung im Grandhotel{" "}
              </span>{" "}
              (German edition of Christie and Agatha Book 4) released
            </p>
            <p>
              <span className="upcomingbutton">BOOK</span>{" "}
              <span className="strong">September 2026</span> -{" "}
              <span className="italics">A Puzzle in Plane Sight</span> (Christie
              and Agatha Book 9) released
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
