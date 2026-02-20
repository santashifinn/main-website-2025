import { useState } from "react";

import christieagathabk4_0 from "/assets/christieagathabook4.jpg";
import christieagathabk4_1 from "/assets/christieagathabook4preview1.jpg";
import christieagathabk4_2 from "/assets/christieagathabook4preview2.jpg";
import christieagathabk4_3 from "/assets/christieagathabook4preview3.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook4EN from "./ChristieAgathaBook4EN";
import ChristieAgathaBook4EN2 from "./ChristieAgathaBook4EN2";
import ChristieAgathaBook4PL from "./ChristieAgathaBook4PL";
import ChristieAgathaBook4DE from "./ChristieAgathaBook4DE";
import ChristieAgathaBook4CH from "./ChristieAgathaBook4CH";

const ChristieAgathaBook4 = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [bookEdition, setBookEdition] = useState("EN");

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
            src={christieagathabk4_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk4_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
              onClick={() => showImage(christieagathabk4_1)}
            />{" "}
            <img
              src={christieagathabk4_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
              onClick={() => showImage(christieagathabk4_2)}
            />{" "}
            <img
              src={christieagathabk4_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
              onClick={() => showImage(christieagathabk4_3)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 4: Ransom on the Riviera</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/123184364-ransom-on-the-riviera"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?ie=UTF8&channel=glance-detail&asin=1782268170"
                    target="_blank"
                  >
                    Review on Amazon
                  </a>
                </span>{" "}
                ★
              </button>
            </p>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.goodreads.com/review/edit/123184364"
                    target="_blank"
                  >
                    Review on Goodreads
                  </a>
                </span>{" "}
                ★
              </button>
            </p>
          </section>

          <section className="books-individual-info">
            <p>
              <span className="italics">
                "If you want to see your cousin again, come to the old quay at
                seven tomorrow night, alone. Be prepared to be married. Do not
                involve the police."
              </span>
            </p>
            <p>
              A relaxing break on the French Riviera becomes a dramatic
              investigation when famous physicist, Irène Curie, receives a
              ransom note demanding her hand in marriage. What’s more, Christie
              and Agatha’s friend has been kidnapped! Can the twins find out who
              is behind the ransom note and save both Auguste and Miss Curie?
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 144 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> 2nd February
              2023
            </p>
          </section>
          <section className="books-individual-buy">
            <h3>Editions & Where to Buy</h3>
            <p>
              <button onClick={() => setBookEdition("EN")}>
                <span className="underline">
                  {bookEdition === "EN" ? (
                    <span className="strong">English (UK)</span>
                  ) : (
                    "English (UK)"
                  )}
                </span>
              </button>
              <span className="accent-books">{" • "}</span>
              <button onClick={() => setBookEdition("EN2")}>
                <span className="underline">
                  {bookEdition === "EN2" ? (
                    <span className="strong">English (Outside UK)</span>
                  ) : (
                    "English (Outside UK)"
                  )}
                </span>
              </button>
              <span className="accent-books">{" • "}</span>{" "}
              <button onClick={() => setBookEdition("DE")}>
                <span className="underline">
                  {" "}
                  {bookEdition === "DE" ? (
                    <span className="strong">German</span>
                  ) : (
                    "German"
                  )}
                </span>
              </button>
              <span className="accent-books">{" • "}</span>{" "}
              <button onClick={() => setBookEdition("PL")}>
                <span className="underline">
                  {" "}
                  {bookEdition === "PL" ? (
                    <span className="strong">Polish</span>
                  ) : (
                    "Polish"
                  )}
                </span>
              </button>
              <span className="accent-books">{" • "}</span>{" "}
              <button onClick={() => setBookEdition("CH")}>
                <span className="underline">
                  {" "}
                  {bookEdition === "CH" ? (
                    <span className="strong">Chinese</span>
                  ) : (
                    "Chinese"
                  )}
                </span>
              </button>
            </p>

            {bookEdition === "DE" ? (
              <ChristieAgathaBook4DE />
            ) : bookEdition === "PL" ? (
              <ChristieAgathaBook4PL />
            ) : bookEdition === "CH" ? (
              <ChristieAgathaBook4CH />
            ) : bookEdition === "EN2" ? (
              <ChristieAgathaBook4EN2 />
            ) : (
              <ChristieAgathaBook4EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook4;
