import { useState } from "react";

import christieagathabk5_0 from "/assets/christieagathabook5.jpg";
import christieagathabk5_1 from "/assets/christieagathabook5preview0.jpg";
import christieagathabk5_2 from "/assets/christieagathabook5preview1.jpg";
import christieagathabk5_3 from "/assets/christieagathabook5preview2.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook5EN from "./ChristieAgathaBook5EN";
import ChristieAgathaBook5EN2 from "./ChristieAgathaBook5EN2";

const ChristieAgathaBook5 = () => {
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
            src={christieagathabk5_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 5 - Genius on the Green Express"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk5_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
              onClick={() => showImage(christieagathabk5_1)}
            />{" "}
            <img
              src={christieagathabk5_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
              onClick={() => showImage(christieagathabk5_2)}
            />{" "}
            <img
              src={christieagathabk5_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
              onClick={() => showImage(christieagathabk5_3)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 5: Genius on the Green Express</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/198487216-genius-on-the-green-express"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?ie=UTF8&channel=glance-detail&asin=1782268189"
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
                    href="https://www.goodreads.com/review/edit/198487216"
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
              <span className="strong">Publication date:</span> 7th September
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
            </p>

            {bookEdition === "EN2" ? (
              <ChristieAgathaBook5EN2 />
            ) : (
              <ChristieAgathaBook5EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook5;
