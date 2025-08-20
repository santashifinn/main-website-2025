import { useState } from "react";

import awtletbk3_0 from "/assets/awtletbook3.jpg";
import awtletbk3_1 from "/assets/awtletbook3preview1.jpg";
import awtletbk3_1a from "/assets/awtletbook3preview1a.jpg";
import awtletbk3_2 from "/assets/awtletbook3preview2.jpg";
import awtletbk3_2a from "/assets/awtletbook3preview2a.jpg";

const AwtletBook3 = () => {
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
            src={awtletbk3_0}
            className="books-covers-img-big"
            alt="Assassins Want to Learn English, Too! - Lesson 1"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={awtletbk3_1a}
              className="books-preview-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 1"
              onClick={() => showImage(awtletbk3_1)}
            />{" "}
            <img
              src={awtletbk3_2a}
              className="books-preview-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 1"
              onClick={() => showImage(awtletbk3_2)}
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
                ? "Assassins Want to Learn English, Too! "
                : "暗殺者も英語を習いたい "}
              - Lesson 1
            </h3>
            <p />
          </section>

          <section className="books-individual-info">
            {language === "EN" ? (
              <>
                <p>
                  These days knowing English is an important skill for many
                  professions... including assassins?!
                </p>
                <p>
                  Shy, klutzy assassin Chinatsu Mori’s English skills are put to
                  the test when a lost tourist asks her for help. Meanwhile,
                  Chinatsu’s outgoing, eccentric English teacher Alice Sinclair
                  is… housebreaking?!
                </p>
                <p>
                  The cute, fluffy, silly comedy romance about an assassin and
                  her English teacher continues!
                </p>
              </>
            ) : (
              <>
                <p>
                  最近英語が話せることは、多くの職業で重要なスキルとなっている...暗殺者もその一つ？！
                </p>
                <p>
                  内気で不器用な暗殺者、森血夏の英語力は、道に迷った観光客から助けを求められた時に試される。一方、血夏の英語の先生アリス・シンクレアは家宅侵入罪を犯している？！
                </p>
                <p>
                  暗殺者と英語の先生が繰り広げる、可愛いコメディロマンスは続く。
                </p>
              </>
            )}

            {language === "EN" ? (
              <>
                <p>
                  <span className="strong">Reading age:</span> 8 years+
                  <br />
                  <span className="strong">Languages:</span> English and
                  Japanese
                  <br />
                  <span className="strong">Size:</span> A5
                  <br />
                  <span className="strong">Length:</span> 36 pages
                  <br />
                  <span className="strong">Publication date:</span> 19th
                  February 2023 (COMITIA 143)
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="strong">読書年齢: </span>8歳~
                  <br />
                  <span className="strong">言語: </span>日本語と英語
                  <br />
                  <span className="strong">版型サイズ: </span> A5
                  <br />
                  <span className="strong">ページ: </span> 36
                  <br />
                  <span className="strong">納品予定日: </span>2023年2月19日
                  (COMITIA 143)
                </p>
              </>
            )}

            {language === "EN" ? (
              <>
                <p>
                  <span className="strong">Contents:</span>
                  <br />
                  Episodes 41-60
                  <br />
                  Profiles
                  <br />
                  Author comments
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="strong">収録内容:</span>
                  <br />
                  エピソード 41-60
                  <br />
                  プロフィール
                  <br />
                  著者コメント
                </p>
              </>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default AwtletBook3;
