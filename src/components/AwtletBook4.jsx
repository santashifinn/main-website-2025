import { useState } from "react";

import awtletbk4_0 from "/assets/awtletbook4.jpg";
import awtletbk4_1 from "/assets/awtletbook4preview1.jpg";
import awtletbk4_1a from "/assets/awtletbook4preview1a.jpg";
import awtletbk4_2 from "/assets/awtletbook4preview2.jpg";
import awtletbk4_2a from "/assets/awtletbook4preview2a.jpg";

const AwtletBook4 = () => {
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
            src={awtletbk4_0}
            className="books-covers-img-big"
            alt="Assassins Want to Learn English, Too! - Lesson 4"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={awtletbk4_1a}
              className="books-preview-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 4"
              onClick={() => showImage(awtletbk4_1)}
            />{" "}
            <img
              src={awtletbk4_2a}
              className="books-preview-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 4"
              onClick={() => showImage(awtletbk4_2)}
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
                  Shy, klutzy assassin Chinatsu Mori and her murder senpai
                  Fiction take on a unusal mission in Ueno Park … but
                  unbeknownst to them, Chinatsu’s outgoing, eccentric English
                  teacher Alice Sinclair is also heading there on an important
                  mission of her own!
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
                  内気で不器用な暗殺者、森血夏と殺人の先輩フィクションが上野公園で異例のミッションに挑む。
                  しかし知らないところで、血夏の英語の先生アリス・シンクレアもまた、重要なミッションに挑み、上野公園に向かっている！
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
                  <span className="strong">Publication date:</span> 3rd
                  September 2023 (COMITIA 145)
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
                  <span className="strong">納品予定日: </span>2023年9月3日
                  (COMITIA 145)
                </p>
              </>
            )}

            {language === "EN" ? (
              <>
                <p>
                  <span className="strong">Contents:</span>
                  <br />
                  Episodes 61-80
                  <br />
                  Author comments
                  <br />2 bonus comics
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="strong">収録内容:</span>
                  <br />
                  エピソード 61-80
                  <br />
                  著者コメント
                  <br />2 オマケ漫画
                </p>
              </>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default AwtletBook4;
