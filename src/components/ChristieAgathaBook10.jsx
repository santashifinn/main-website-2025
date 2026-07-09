import { useState } from "react";

import christieagathabk10_0 from "/assets/christieagathabook10.jpg";
import christieagathabk10_1 from "/assets/christieagathabook10preview0.jpg";
import christieagathabk10_2 from "/assets/christieagathabook10preview1.jpg";
import christieagathabk10_3 from "/assets/christieagathabook10preview2.jpg";
// import christieagathabk10_4 from "/assets/christieagathabook10preview3.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook10EN from "./ChristieAgathaBook10EN";
import ChristieAgathaBook10EN2 from "./ChristieAgathaBook10EN2";

const ChristieAgathaBook10 = () => {
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
            src={christieagathabk10_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 10 - A Mystery Manifests"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk10_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 10 - A Mystery Manifests"
              onClick={() => showImage(christieagathabk10_1)}
            />{" "}
            <img
              src={christieagathabk10_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 10 - A Mystery Manifests"
              onClick={() => showImage(christieagathabk10_2)}
            />{" "}
            <img
              src={christieagathabk10_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 10 - A Mystery Manifests"
              onClick={() => showImage(christieagathabk10_3)}
            />{" "}
            {/* 
            <img
              src={christieagathabk10_4}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 10 - A Mystery Manifests"
              onClick={() => showImage(christieagathabk10_4)}
            />{" "} */}
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 10 - A Mystery Manifests</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/255162003-a-mystery-manifests"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=1782268235"
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
                    href="https://www.goodreads.com/review/edit/255162003"
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
                "You know, this looks exactly like the sort of place where a
                mystery might happen!"
              </span>
            </p>
            <p>
              There are many places the twins would rather be than stuck on a
              spiritualist retreat. But things become interesting when famous
              escape-artist Harry Houdini shows up on the island to expose the
              money-grabbing spiritualists. However, when he disappears without
              a trace, it soon becomes clear that it’s not of his own doing –
              he’s been kidnapped! It’s up to Christie and Agatha to help him in
              his most daring escape yet.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 144 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> 24th September
              2026
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
              <ChristieAgathaBook10EN2 />
            ) : (
              <ChristieAgathaBook10EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook10;
