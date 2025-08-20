import { useState } from "react";

import seoldscreenshots1 from "/assets/seoldscreenshots1.jpg";
import seoldscreenshots2 from "/assets/seoldscreenshots2.jpg";
import seoldscreenshots3 from "/assets/seoldscreenshots3.jpg";
import seoldscreenshots4 from "/assets/seoldscreenshots4.jpg";
import seoldscreenshots5 from "/assets/seoldscreenshots5.jpg";
import seoldscreenshots6 from "/assets/seoldscreenshots6.jpg";
import seoldscreenshots7 from "/assets/seoldscreenshots7.jpg";
import seoldscreenshots8 from "/assets/seoldscreenshots8.jpg";
import seoldscreenshots9 from "/assets/seoldscreenshots9.jpg";
import seoldscreenshots10 from "/assets/seoldscreenshots10.jpg";

import seoldprofileicon1 from "/assets/seoldprofileicon1.jpg";
import seoldprofileicon2 from "/assets/seoldprofileicon2.jpg";
import seoldprofileicon3 from "/assets/seoldprofileicon3.jpg";
import seoldprofileicon4 from "/assets/seoldprofileicon4.jpg";
import seoldprofileicon5 from "/assets/seoldprofileicon5.jpg";
import seoldprofileicon6 from "/assets/seoldprofileicon6.jpg";
import seoldprofileicon7 from "/assets/seoldprofileicon7.jpg";

import seoldprofile1 from "/assets/seoldprofile1.png";
import seoldprofile2 from "/assets/seoldprofile2.png";
import seoldprofile3 from "/assets/seoldprofile3.png";
import seoldprofile4 from "/assets/seoldprofile4.png";
import seoldprofile5 from "/assets/seoldprofile5.png";
import seoldprofile6 from "/assets/seoldprofile6.png";
import seoldprofile7 from "/assets/seoldprofile7.png";

const ProjectSixthEntryOld = () => {
  const [seCharacter, setSeCharacter] = useState("Maria");

  return (
    <>
      <section className="projects">
        <h2>
          <span className="accent-projects">S</span>ixth Entry
        </h2>

        <p>
          <span className="italics">Sixth Entry</span> is a point and click game
          I started making in RPG Maker VX back in 2013.
          <br />I have the story planned out, so if I get the opportunity I'd
          love to remake it with updated graphics in the future!
        </p>

        <h3>
          <span className="accent-projects">D</span>emo
        </h3>

        <section className="sixth-entry-download">
          <a href="assets/sixthentrydemo.zip" download>
            <button className="sixth-entry-download-button">
              DOWNLOAD
            </button>
          </a>
        </section>

        <h3>
          <span className="accent-projects">C</span>haracters
        </h3>

        <section className="sixth-entry-characters">
          <section className="sixth-entry-characters1">
            <ul>
              <li>
                <button onClick={() => setSeCharacter("Maria")}>
                  <img src={seoldprofileicon1} alt="Maria" />
                </button>
              </li>
              <li>
                <button onClick={() => setSeCharacter("Phosphor")}>
                  <img src={seoldprofileicon2} alt="Phosphor" />
                </button>
              </li>
              <li>
                <button onClick={() => setSeCharacter("Isabelle")}>
                  <img src={seoldprofileicon3} alt="Isabelle" />
                </button>
              </li>
              <li>
                <button onClick={() => setSeCharacter("Galahad")}>
                  <img src={seoldprofileicon4} alt="Galahad" />
                </button>
              </li>
              <li>
                <button onClick={() => setSeCharacter("Lian")}>
                  <img src={seoldprofileicon5} alt="Lian" />
                </button>
              </li>
              <li>
                <button onClick={() => setSeCharacter("Jameson")}>
                  <img src={seoldprofileicon6} alt="Jameson" />
                </button>
              </li>
              <li>
                <button onClick={() => setSeCharacter("David")}>
                  <img src={seoldprofileicon7} alt="David" />
                </button>
              </li>
            </ul>
          </section>
          <section className="sixth-entry-characters2">
            {seCharacter === "David" ? (
              <>
                <img src={seoldprofile7} alt="David" />
              </>
            ) : seCharacter === "Jameson" ? (
              <>
                <img src={seoldprofile6} alt="Jameson" />
              </>
            ) : seCharacter === "Lian" ? (
              <>
                <img src={seoldprofile5} alt="Lian" />
              </>
            ) : seCharacter === "Galahad" ? (
              <>
                <img src={seoldprofile4} alt="Galahad" />
              </>
            ) : seCharacter === "Isabelle" ? (
              <>
                <img src={seoldprofile3} alt="Isabelle" />
              </>
            ) : seCharacter === "Phosphor" ? (
              <>
                <img src={seoldprofile2} alt="Phosphor" />
              </>
            ) : (
              <>
                <img src={seoldprofile1} alt="Maria" />
              </>
            )}
          </section>
        </section>

        <h3>
          <span className="accent-projects">S</span>creenshots
        </h3>

        <section className="screenshots">
          <ul>
            <li>
              <img src={seoldscreenshots1} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots2} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots3} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots4} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots5} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots6} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots7} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots8} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots9} alt="Sixth Entry screenshot" />
            </li>
            <li>
              <img src={seoldscreenshots10} alt="Sixth Entry screenshot" />
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default ProjectSixthEntryOld;
