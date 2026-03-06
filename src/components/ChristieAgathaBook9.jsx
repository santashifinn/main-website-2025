import { useState } from "react";

import christieagathabk9_0 from "/assets/christieagathabook9.jpg";
// import christieagathabk9_1 from "/assets/christieagathabook9preview0.jpg";
// import christieagathabk9_2 from "/assets/christieagathabook9preview1.jpg";
// import christieagathabk9_3 from "/assets/christieagathabook9preview2.jpg";
// import christieagathabk9_4 from "/assets/christieagathabook9preview3.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook9EN from "./ChristieAgathaBook9EN";
import ChristieAgathaBook9EN2 from "./ChristieAgathaBook9EN2";

const ChristieAgathaBook9 = () => {
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
            src={christieagathabk9_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 9 - A Puzzle in Plane Sight"
          />
          {/* <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk9_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 9 - A Puzzle in Plane Sight"
              onClick={() => showImage(christieagathabk9_1)}
            />{" "}
            <img
              src={christieagathabk9_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 9 - A Puzzle in Plane Sight"
              onClick={() => showImage(christieagathabk9_2)}
            />{" "}
            <img
              src={christieagathabk9_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 9 - A Puzzle in Plane Sight"
              onClick={() => showImage(christieagathabk9_3)}
            />{" "}
            <img
              src={christieagathabk9_4}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 9 - A Puzzle in Plane Sight"
              onClick={() => showImage(christieagathabk9_4)}
            />{" "}
          </section> */}
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 9: A Puzzle in Plane Sight</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/249374617-a-puzzle-in-plane-sight"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=1782268227"
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
                    href="https://www.goodreads.com/review/edit/249374617"
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
                "Miss Jacqueline Cochran is saying that she wants to back out of
                the record attempt. I need you to find out why."
              </span>
            </p>
            <p>
              Christie and Agatha’s Detective Agency receives a call to embark
              on a new case! American pilot Jackie Cochran arrived in England to
              break a flying record. But she has pulled out under mysterious
              circumstances. Their first clue – a blackmail letter. Can the gang
              find out who the blackmailer is and ensure Miss Cochran gets her
              chance at making history?
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 144 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> 30th July 2026
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
              <ChristieAgathaBook9EN2 />
            ) : (
              <ChristieAgathaBook9EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook9;
