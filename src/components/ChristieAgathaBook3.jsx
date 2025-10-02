import { useState } from "react";

import christieagathabk3_0 from "/assets/christieagathabook3.jpg";
import christieagathabk3_1 from "/assets/christieagathabook3preview0.jpg";
import christieagathabk3_2 from "/assets/christieagathabook3preview1.jpg";
import christieagathabk3_3 from "/assets/christieagathabook3preview2.jpg";
import christieagathabk3_4 from "/assets/christieagathabook3preview3.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook3DE from "./ChristieAgathaBook3DE";
import ChristieAgathaBook3AR from "./ChristieAgathaBook3AR";
import ChristieAgathaBook3EN2 from "./ChristieAgathaBook3EN2";
import ChristieAgathaBook3EN from "./ChristieAgathaBook3EN";
import ChristieAgathaBook3PL from "./ChristieAgathaBook3PL";

const ChristieAgathaBook3 = () => {
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
            src={christieagathabk3_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk3_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
              onClick={() => showImage(christieagathabk3_1)}
            />{" "}
            <img
              src={christieagathabk3_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
              onClick={() => showImage(christieagathabk3_2)}
            />{" "}
            <img
              src={christieagathabk3_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
              onClick={() => showImage(christieagathabk3_3)}
            />
            <img
              src={christieagathabk3_4}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
              onClick={() => showImage(christieagathabk3_4)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 3: Tombful of Trouble</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/60261603-tombful-of-trouble"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?ie=UTF8&channel=glance-detail&asin=1782268162"
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
                    href="https://www.goodreads.com/review/edit/60261603"
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
                "The truth of the matter is that a number of valuable artefacts
                have been stolen. There is a thief at the dig!"
              </span>
            </p>
            <p>
              Christie and Agatha find themselves at the heart of a mystery,
              during the excavation of an Egyptian pharaoh. Lord and Lady
              Carnarvon's dig is in jeopardy unless the thief at the site can be
              found. But time is quickly running out for the twins to wrap up
              the case at the mummy's tomb.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 128 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> September 2022
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
              <span className="accent-books">{" • "}</span>
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
              <button onClick={() => setBookEdition("AR")}>
                <span className="underline">
                  {bookEdition === "AR" ? (
                    <span className="strong">Arabic</span>
                  ) : (
                    "Arabic"
                  )}
                </span>
              </button>
            </p>

            {bookEdition === "DE" ? (
              <ChristieAgathaBook3DE />
            ) : bookEdition === "PL" ? (
              <ChristieAgathaBook3PL />
            ) : bookEdition === "AR" ? (
              <ChristieAgathaBook3AR />
            ) : bookEdition === "EN2" ? (
              <ChristieAgathaBook3EN2 />
            ) : (
              <ChristieAgathaBook3EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook3;
