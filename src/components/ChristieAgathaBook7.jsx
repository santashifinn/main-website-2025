import { useState } from "react";

import christieagathabk7_0 from "/assets/christieagathabook7.jpg";
import christieagathabk7_1 from "/assets/christieagathabook7preview0.jpg";
import christieagathabk7_2 from "/assets/christieagathabook7preview1.jpg";
import christieagathabk7_3 from "/assets/christieagathabook7preview2.jpg";
import christieagathabk7_4 from "/assets/christieagathabook7preview3.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook7EN from "./ChristieAgathaBook7EN";
import ChristieAgathaBook7EN2 from "./ChristieAgathaBook7EN2";

const ChristieAgathaBook7 = () => {
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
            src={christieagathabk7_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk7_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
              onClick={() => showImage(christieagathabk7_1)}
            />{" "}
            <img
              src={christieagathabk7_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
              onClick={() => showImage(christieagathabk7_2)}
            />{" "}
            <img
              src={christieagathabk7_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
              onClick={() => showImage(christieagathabk7_3)}
            />{" "}
            <img
              src={christieagathabk7_4}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
              onClick={() => showImage(christieagathabk7_4)}
            />{" "}
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 7: The Composer Crisis</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/211990575-the-composer-crisis"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?ie=UTF8&channel=glance-detail&asin=180263083X"
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
                    href="https://www.goodreads.com/review/edit/211990575"
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
                "The piano is a warning. I’ve taken Miss Margaret. If you want
                to see her again, Miss Price, pull out of the concert, or else."
              </span>
            </p>
            <p>
              In Chicago, Christie and Agatha meet composer Florence Price at a
              small gathering. But any hopes the twins have of hearing Miss
              Price play are quickly shattered – much like the host Mrs Bond’s
              wrecked piano! Soon, it’s up to Christie and Agatha to find out
              who smashed the piano to pieces and where they’ve taken Mrs Bond’s
              daughter.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 144 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> 25th July 2024
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
              <ChristieAgathaBook7EN2 />
            ) : (
              <ChristieAgathaBook7EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook7;
