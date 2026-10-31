import { useState, useEffect } from "react";

import preppingformidnightscreenshots1 from "/assets/preppingformidnight_screenshot6.png";
import preppingformidnightscreenshots2 from "/assets/preppingformidnight_screenshot1.png";
import preppingformidnightscreenshots3 from "/assets/preppingformidnight_screenshot3.png";
import preppingformidnightscreenshots4 from "/assets/preppingformidnight_screenshot5.png";
import preppingformidnightscreenshots5 from "/assets/preppingformidnight_screenshot4.png";
import preppingformidnightscreenshots6 from "/assets/preppingformidnight_screenshot2.png";
import preppingformidnightscreenshots7 from "/assets/preppingformidnight_screenshot7.png";

const ProjectPreppingForMidnight = () => {
  return (
    <>
      <section className="projects">
        <h2>
          <span className="accent-projects">P</span>repping for Midnight
        </h2>
        <p>
          <span className="strong">Current release:</span> 1.10
        </p>
        <br />
        <h3>
          <span className="accent-projects">P</span>lay in Browser
        </h3>
        <br />
        <div>
          <iframe
            frameBorder="0"
            src="https://pipmurphy.com/preppingformidnight"
            allowFullScreen=""
            width="816"
            height="672"
          ></iframe>
        </div>
        <br />
        <p>An urban legend about a note that leads to doom.</p>
        <p>
          You thank your lucky stars that such things don't exist in real life,
          until a note arrives under <span className="italics">your</span>{" "}
          door...
        </p>
        <p>
          <span className="italics">"I will come at midnight"</span>
        </p>
        <p>
          Secure your apartment in various ways and think outside the box to
          prepare for your midnight visitor.
        </p>
        <br />
        <h3>
          <span className="accent-projects">F</span>eatures
        </h3>
        <br />
        <p>
          • 30+ minutes of gameplay (more to see everything with no skipping)
          <br />• Six endings, including an unlockable True Ending
          <br />• Hundreds of original hand-drawn illustrations
          <br />• Comic-like cut-scenes
          <br />• Countless text variations
          <br />• 14 achievements
          <br />• Note: <span className="italics">no</span> flashing images
        </p>
        <br />
        <h3>
          <span className="accent-projects">D</span>ownload
        </h3>
        <section className="sixth-entry-download">
          <a href="assets/PreppingforMidnight_MAC.zip" download>
            <button className="sixth-entry-download-button">MAC</button>
          </a>{" "}
          <a href="assets/PreppingforMidnight_PC.zip" download>
            <button className="sixth-entry-download-button">PC</button>
          </a>
        </section>
        <p>
          Or download / play in browser on itch:
          <br />
          <iframe
            frameborder="0"
            src="https://itch.io/embed/5264488"
            width="552"
            height="167"
          >
            <a href="https://santashi.itch.io/tales-from-the-rabbit-hole-prepping-for-midnight">
              Tales from the Rabbit Hole: Prepping for Midnight by santashi
            </a>
          </iframe>
        </p>
        <br />
        <h3>
          <span className="accent-projects">C</span>ontrols
        </h3>
        <br />
        <p>
          <span className="strong">MOUSE / TOUCH SCREEN</span>
        </p>
        <p>
          • Move to destination you click/tap
          <br />• Select items or options by clicking / tapping on them
        </p>
        <p>
          <span className="strong">KEYBOARD + MOUSE</span>*
        </p>
        <p>
          • OK = space bar / enter
          <br />• Cancel / Call Menu = X / escape
          <br />• Move = directional keys
          <br />
          <br />
          *Some items must be clicked on, using a mouse or tracker pad.
        </p>
        <br />

        <h3>
          <span className="accent-projects">S</span>creenshots
        </h3>
        <section className="screenshots">
          <ul>
            <li>
              <img
                src={preppingformidnightscreenshots1}
                alt="Sixth Entry screenshot"
              />
            </li>
            <li>
              <img
                src={preppingformidnightscreenshots2}
                alt="Sixth Entry screenshot"
              />
            </li>
            <li>
              <img
                src={preppingformidnightscreenshots3}
                alt="Sixth Entry screenshot"
              />
            </li>
            <li>
              <img
                src={preppingformidnightscreenshots4}
                alt="Sixth Entry screenshot"
              />
            </li>
            <li>
              <img
                src={preppingformidnightscreenshots5}
                alt="Sixth Entry screenshot"
              />
            </li>
            <li>
              <img
                src={preppingformidnightscreenshots6}
                alt="Sixth Entry screenshot"
              />
            </li>
            <li>
              <img
                src={preppingformidnightscreenshots7}
                alt="Sixth Entry screenshot"
              />
            </li>
          </ul>
        </section>
        <br />
        <h3>
          <span className="accent-projects">C</span>redits
        </h3>
        <br />
        <p>
          • <span className="strong">Engine:</span> RPG Maker MZ
          <br /> • <span className="strong">Scripts and Plugins:</span> Casper
          Gaming, Galv, Moghunter (Mog Plugins), VisuStella, RPGMaker MZ
          <br /> • <span className="strong">Music:</span> AudioHero.com
          <br /> • <span className="strong">SFX:</span> AudioHero.com, GameDev
          Market (Car Sound Effects and Physics Object Interaction SFX by
          GravitySound, Halloween SFX Pack by EvilMind), Ovani Sound, RPG Maker
          MZ
          <br /> • <span className="strong">Art & Design:</span> Santashi (any
          leftover graphics/UI elements by RPG Maker MZ)
          <br /> • <span className="strong">Story & Dialogue:</span> Santashi
        </p>
      </section>
    </>
  );
};

export default ProjectPreppingForMidnight;
