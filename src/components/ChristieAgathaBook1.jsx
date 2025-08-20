import { useState } from "react";

import christieagathabk1_0 from "/assets/christieagathabook1.jpg";
import christieagathabk1_1 from "/assets/christieagathabook1preview0.jpg";
import christieagathabk1_2 from "/assets/christieagathabook1preview1.jpg";
import christieagathabk1_3 from "/assets/christieagathabook1preview2.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook1EN from "./ChristieAgathaBook1EN";
import ChristieAgathaBook1DE from "./ChristieAgathaBook1DE";
import ChristieAgathaBook1CZ from "./ChristieAgathaBook1CZ";
import ChristieAgathaBook1SK from "./ChristieAgathaBook1SK";
import ChristieAgathaBook1TR from "./ChristieAgathaBook1TR";
import ChristieAgathaBook1AR from "./ChristieAgathaBook1AR";
import ChristieAgathaBook1EN2 from "./ChristieAgathaBook1EN2";

const ChristieAgathaBook1 = () => {
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
            src={christieagathabk1_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk1_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
              onClick={() => showImage(christieagathabk1_1)}
            />{" "}
            <img
              src={christieagathabk1_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
              onClick={() => showImage(christieagathabk1_2)}
            />
            <img
              src={christieagathabk1_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
              onClick={() => showImage(christieagathabk1_3)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 1: A Discovery Disappears</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/57168103-a-christie-and-agatha-s-detective-agency"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?ie=UTF8&channel=glance-detail&asin=1782268146"
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
                    href="https://www.goodreads.com/review/edit/57902334"
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
                "Whoever gave you that sandwich did it deliberately. They wanted
                to sabotage Fleming's research."
              </span>
            </p>
            <p>
              When Agatha accidentally eats a major scientific discovery (hidden
              in a sandwich!), it's a race against time for twins Agatha and
              Christie to find out who's trying to ruin physician Sir Alexander
              Fleming's reputation.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 128 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> September 2021
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
              <span className="accent-books">{" • "}</span>
              <button onClick={() => setBookEdition("CZ")}>
                <span className="underline">
                  {bookEdition === "CZ" ? (
                    <span className="strong">Czech</span>
                  ) : (
                    "Czech"
                  )}
                </span>
              </button>
              <span className="accent-books">{" • "}</span>
              <button onClick={() => setBookEdition("SK")}>
                <span className="underline">
                  {bookEdition === "SK" ? (
                    <span className="strong">Slovak</span>
                  ) : (
                    "Slovak"
                  )}
                </span>
              </button>
              <span className="accent-books">{" • "}</span>
              <button onClick={() => setBookEdition("TR")}>
                <span className="underline">
                  {" "}
                  {bookEdition === "TR" ? (
                    <span className="strong">Turkish</span>
                  ) : (
                    "Turkish"
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
              <ChristieAgathaBook1DE />
            ) : bookEdition === "CZ" ? (
              <ChristieAgathaBook1CZ />
            ) : bookEdition === "SK" ? (
              <ChristieAgathaBook1SK />
            ) : bookEdition === "TR" ? (
              <ChristieAgathaBook1TR />
            ) : bookEdition === "AR" ? (
              <ChristieAgathaBook1AR />
            ) : bookEdition === "EN2" ? (
              <ChristieAgathaBook1EN2 />
            ) : (
              <ChristieAgathaBook1EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1;
