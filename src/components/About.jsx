import { useState } from "react";
import { Link } from "react-router-dom";

import profilepip from "/assets/aboutpics0.jpg";
import aboutpics1 from "/assets/aboutpics1.jpg";
import aboutpics2 from "/assets/aboutpics2.jpg";
import aboutpics3 from "/assets/aboutpics3.jpg";
import aboutpics4 from "/assets/aboutpics4.jpg";
import aboutpics5 from "/assets/aboutpics5.jpg";
import aboutpics6 from "/assets/aboutpics6.jpg";
import aboutpics7 from "/assets/aboutpics7.jpg";
import aboutpics8 from "/assets/aboutpics8.jpg";
import aboutpics9 from "/assets/aboutpics9.jpg";
import aboutpics10 from "/assets/aboutpics10.jpg";
import aboutpics11 from "/assets/aboutpics11.jpg";
import aboutpics12 from "/assets/aboutpics12.jpg";
import aboutpics13 from "/assets/aboutpics13.jpg";
import aboutpics14 from "/assets/aboutpics14.jpg";
import aboutpics15 from "/assets/aboutpics15.jpg";

const About = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showImage = (imageInfo) => {
    setImageToShow(imageInfo);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <>
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <img className="about-gallery-pics-full" src={imageToShow}></img>
        </div>
      ) : (
        ""
      )}

      <section className="about">
        <h1>
          <span className="accent-about">A</span>BOUT
        </h1>

        <h2>
          <span className="accent-about">M</span>E ME ME
        </h2>

        <section className="mememe">
          <section className="mememe-1">
            <img src={profilepip} className="profile-pip" alt="Pip Murphy" />
          </section>

          <section className="mememe-2">
            <p>
              Hi! I’m Pip Murphy - curry enthusiast, red panda devotee, avid
              doodler and writer of (mostly!) fiction.
            </p>
            <p>
              I was born in England, went to university in Scotland, then
              cosplayed as an English teacher in Japan for 10 plus years, where
              I met my wonderful wife. We’re currently working out where to live
              next!
            </p>
            <p>
              I’m the author of the MG 1920s mystery series{" "}
              <Link to="/christieandagatha">
                <span className="underline italics strong">
                  Christie and Agatha’s Detective Agency
                </span>
              </Link>
              , (famous historical figures+mystery) and I have a{" "}
              <span className="strike">few</span> lot more stories in the
              pipeline, too.
            </p>
            <p>
              I also have a bilingual (English/Japanese) comic on the go about
              an assassin and her English teacher:{" "}
              <Link to="/awtlet-comics">
                <span className="underline italics strong">
                  Assassins Want to Learn English, Too!
                </span>
              </Link>
            </p>
            <p>
              When I’m not writing or drawing, I like reading (especially
              mysteries or books with wry humour), going exploring, playing
              board games and building Lego with my wife, dabbling in
              photography, playing and making video games, website building… I
              have too many hobbies but it’s the world’s fault for being too
              full of interesting things!
            </p>
          </section>
        </section>

        <h2>
          <span className="accent-about">G</span>ALLERY
        </h2>

        <p>
          With thanks to Edith, mum, Original Tomoko, Rebecca, Aarthi, Rodrigo,
          Han, Bärbel, Gabi and one random kind lady for the photos that aren't
          selfies!
        </p>

        <section className="about-gallery">
          <img
            src={aboutpics1}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics1)}
          />{" "}
          <img
            src={aboutpics2}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics2)}
          />{" "}
          <img
            src={aboutpics3}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics3)}
          />{" "}
          <img
            src={aboutpics4}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics4)}
          />{" "}
          <img
            src={aboutpics9}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics9)}
          />
          <img
            src={aboutpics6}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics6)}
          />
          <img
            src={aboutpics7}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics7)}
          />
          <img
            src={aboutpics8}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics8)}
          />
          <img
            src={aboutpics5}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics5)}
          />{" "}
          <img
            src={aboutpics10}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics10)}
          />{" "}
          <img
            src={aboutpics11}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics11)}
          />{" "}
          <img
            src={aboutpics12}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics12)}
          />{" "}
          <img
            src={aboutpics13}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics13)}
          />{" "}
          <img
            src={aboutpics14}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics14)}
          />{" "}
          <img
            src={aboutpics15}
            alt="Pip Murphy"
            className="about-gallery-pics"
            onClick={() => showImage(aboutpics15)}
          />
        </section>
      </section>
    </>
  );
};

export default About;
