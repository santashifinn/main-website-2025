import { useState } from "react";

import awtletbk1_0 from "/assets/awtletbook1.jpg";
import awtletbk1_1 from "/assets/awtletbook1preview1.jpg";
import awtletbk1_1a from "/assets/awtletbook1preview1a.jpg";
import awtletbk1_2 from "/assets/awtletbook1preview2.jpg";
import awtletbk1_2a from "/assets/awtletbook1preview2a.jpg";

const AwtletBook1 = () => {
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
            src={awtletbk1_0}
            className="books-covers-img-big"
            alt="Assassins Want to Learn English, Too! - Lesson 1"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={awtletbk1_1a}
              className="books-preview-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 1"
              onClick={() => showImage(awtletbk1_1)}
            />{" "}
            <img
              src={awtletbk1_2a}
              className="books-preview-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 1"
              onClick={() => showImage(awtletbk1_2)}
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
                  When shy, klutzy assassin Chinatsu Mori messes up a job due to
                  a linguistic misunderstanding, she realises the time has come
                  to tackle the scary beast known as English ... but her
                  outgoing and eccentric new English teacher Alice Sinclair
                  might be hiding one or two secrets of her own!
                </p>
                <p>
                  A cute, fluffy, silly comedy romance about an assassin and her
                  English teacher.
                </p>
              </>
            ) : (
              <>
                <p>
                  最近英語が話せることは、多くの職業で重要なスキルとなっている...暗殺者もその一つ？！
                </p>
                <p>
                  内気で不器用な暗殺者、森血夏は言葉の誤解から仕事を台無しにしてしまい、英語という恐ろしい獣に取り組む時が来たと悟る...
                  でも、彼女の新しい英語の先生アリス・シンクレアには、秘密が隠されているかもしれない!
                </p>
                <p>暗殺者と英語の先生が繰り広げる、可愛いコメディロマンス。</p>
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
                  <span className="strong">Publication date:</span> 4th
                  September 2022 (COMITIA 141)
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
                  <span className="strong">納品予定日: </span>2022年9月4日
                  (COMITIA 141)
                </p>
              </>
            )}

            {language === "EN" ? (
              <>
                <p>
                  <span className="strong">Contents:</span>
                  <br />
                  Episodes 1-20
                  <br />
                  Profiles
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
                  エピソード 1-20
                  <br />
                  プロフィール
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

export default AwtletBook1;
