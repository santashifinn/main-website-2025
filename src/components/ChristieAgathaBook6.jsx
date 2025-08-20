import { useState } from "react";

import christieagathabk6_0 from "/assets/christieagathabook6.jpg";
import christieagathabk6_1 from "/assets/christieagathabook6preview0.jpg";
import christieagathabk6_2 from "/assets/christieagathabook6preview1.jpg";
import christieagathabk6_3 from "/assets/christieagathabook6preview2.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook6EN from "./ChristieAgathaBook6EN";
import ChristieAgathaBook6EN2 from "./ChristieAgathaBook6EN2";

const ChristieAgathaBook6 = () => {
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
            src={christieagathabk6_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk6_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
              onClick={() => showImage(christieagathabk6_1)}
            />{" "}
            <img
              src={christieagathabk6_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
              onClick={() => showImage(christieagathabk6_2)}
            />{" "}
            <img
              src={christieagathabk6_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
              onClick={() => showImage(christieagathabk6_3)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 6: To Halt a Heist</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/207030099-to-halt-a-heist"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?ie=UTF8&channel=glance-detail&asin=1782268197"
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
                    href="https://www.goodreads.com/review/edit/207030099"
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
                "Well," said Agatha, "I think we have at least two suspects
                now."
                <br />
                "You’re right," agreed Christie. "I only wish we had a case!"
              </span>
            </p>
            <p>
              When Shanti Swaroop Bhatnagar receives a threat that his science
              exhibit is going to be stolen, Christie and Agatha’s Detective
              Agency is hired to investigate. That is, until Mr Bhatnagar pulls
              them off the case! But with the threat of a grand heist still
              looming, Christie, Agatha and friends aren’t ready to walk away
              from the mystery just yet.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 144 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> 1st February
              2024
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
              <ChristieAgathaBook6EN2 />
            ) : (
              <ChristieAgathaBook6EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook6;
