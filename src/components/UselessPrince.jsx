import { useState } from "react";

import uselessprince_0 from "/assets/uselessprincecover.jpg";
import uselessprince_1 from "/assets/uselessprincepreview1.jpg";
import uselessprince_1a from "/assets/uselessprincepreview1a.jpg";
import uselessprince_2 from "/assets/uselessprincepreview2.jpg";
import uselessprince_2a from "/assets/uselessprincepreview2a.jpg";
import uselessprince_3 from "/assets/uselessprincepreview3.jpg";
import uselessprince_3a from "/assets/uselessprincepreview3a.jpg";
import uselessprince_4 from "/assets/uselessprincepreview4.jpg";
import uselessprince_4a from "/assets/uselessprincepreview4a.jpg";
import uselessprince_5 from "/assets/uselessprincepreview5.jpg";
import uselessprince_5a from "/assets/uselessprincepreview5a.jpg";
import uselessprince_6 from "/assets/uselessprincepreview6.jpg";
import uselessprince_6a from "/assets/uselessprincepreview6a.jpg";

const UselessPrince = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [language, setLanguage] = useState("EN");

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
          <img className="books-preview-full" src={imageToShow}></img>
        </div>
      ) : (
        ""
      )}

      <section className="books-individual">
        <section className="books-individual1">
          <img
            src={uselessprince_0}
            className="books-covers-img-big"
            alt="The Girl Who Looks Like a Prince but is not Dependable At All"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={uselessprince_1a}
              className="books-preview-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
              onClick={() => showImage(uselessprince_1)}
            />{" "}
            <img
              src={uselessprince_2a}
              className="books-preview-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
              onClick={() => showImage(uselessprince_2)}
            />{" "}
            <img
              src={uselessprince_3a}
              className="books-preview-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
              onClick={() => showImage(uselessprince_3)}
            />{" "}
            <img
              src={uselessprince_4a}
              className="books-preview-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
              onClick={() => showImage(uselessprince_4)}
            />{" "}
            <img
              src={uselessprince_5a}
              className="books-preview-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
              onClick={() => showImage(uselessprince_5)}
            />{" "}
            <img
              src={uselessprince_6a}
              className="books-preview-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
              onClick={() => showImage(uselessprince_6)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-language-selector">
            {language === "EN" ? (
              <button
                className="books-language-selector-button"
                id="books-language-selector-button-on"
                onClick={() => setLanguage("EN")}
              >
                <span className="strong">ENGLISH</span>
              </button>
            ) : (
              <button
                className="books-language-selector-button"
                onClick={() => setLanguage("EN")}
              >
                ENGLISH
              </button>
            )}{" "}
            {language === "EN" ? (
              <button
                className="books-language-selector-button"
                onClick={() => setLanguage("JP")}
              >
                日本語
              </button>
            ) : (
              <button
                className="books-language-selector-button"
                id="books-language-selector-button-on"
                onClick={() => setLanguage("JP")}
              >
                <span className="strong">日本語</span>
              </button>
            )}
          </section>
          <section className="books-individual-titles">
            <h3>
              {language === "EN"
                ? "The Girl Who Looks Like a Prince but is not Dependable At All"
                : "王子様のように見えるけど、全然頼りにならない彼女"}
            </h3>
            <p />
          </section>

          <section className="books-individual-info">
            {language === "EN" ? <></> : <></>}

            {language === "EN" ? (
              <>
                <p>
                  <span className="strong">Reading age:</span> 8 years+
                  <br />
                  <span className="strong">Languages:</span> English and
                  Japanese
                  <br />
                  <span className="strong">Size:</span> B5
                  <br />
                  <span className="strong">Length:</span> 32 pages
                  <br />
                  <span className="strong">Publication date:</span> 28th May
                  2023 (COMITIA 144)
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="strong">読書年齢: </span>8歳~
                  <br />
                  <span className="strong">言語: </span>日本語と英語
                  <br />
                  <span className="strong">版型サイズ: </span> B5
                  <br />
                  <span className="strong">ページ: </span> 32
                  <br />
                  <span className="strong">納品予定日: </span>2023年５月２８日
                  (COMITIA 144)
                </p>
              </>
            )}

            {language === "EN" ? (
              <>
                <p>
                  <span className="strong">Contents:</span>
                  <br />
                  Comedy comic
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="strong">収録内容:</span>
                  <br />
                  コメディコミック
                </p>
              </>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default UselessPrince;
