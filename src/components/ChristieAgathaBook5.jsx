import { useState } from "react";

import christieagathabk5_0 from "/assets/christieagathabook5.jpg";
import christieagathabk5_1 from "/assets/christieagathabook5preview0.jpg";
import christieagathabk5_2 from "/assets/christieagathabook5preview1.jpg";
import christieagathabk5_3 from "/assets/christieagathabook5preview2.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook5EN from "./ChristieAgathaBook5EN";
import ChristieAgathaBook5EN2 from "./ChristieAgathaBook5EN2";
import ChristieAgathaBook5PL from "./ChristieAgathaBook5PL";

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
                "Einstein will be all ready to deliver his oh-so-important
                speech … only to find that he doesn’t have the equipment to
                deliver it with!"
              </span>
            </p>
            <p>
              Christie dreams of a train adventure – the kind she’s read about
              in fiction. But Christie and Agatha’s journey aboard the Green
              Express, with company including Albert Einstein, is more than even
              they bargained for. The twins uncover a plot to sabotage the
              physicist’s radio broadcast, and it’s all up to them to thwart it
              before their journey ends.
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
            </p>

            {bookEdition === "PL" ? (
              <ChristieAgathaBook5PL />
            ) : bookEdition === "EN2" ? (
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
