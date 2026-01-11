import { useState } from "react";

import christieagathabk8_0 from "/assets/christieagathabook8.jpg";
// import christieagathabk7_1 from "/assets/christieagathabook7preview0.jpg";
// import christieagathabk7_2 from "/assets/christieagathabook7preview1.jpg";
// import christieagathabk7_3 from "/assets/christieagathabook7preview2.jpg";
// import christieagathabk7_4 from "/assets/christieagathabook7preview3.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook8EN from "./ChristieAgathaBook8EN";
import ChristieAgathaBook8EN2 from "./ChristieAgathaBook8EN2";

const ChristieAgathaBook8 = () => {
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
            src={christieagathabk8_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 8 - A Curious Catastrophe"
          />
          {/* <p>
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
          </section> */}
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 8: A Curious Catastrophe</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/246448264-a-curious-catastrophe"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=1782268219"
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
                    href="https://www.goodreads.com/review/edit/246448264"
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
                "I tell you this isn’t my cat! Either you’re blind or you’re all
                in on the conspiracy!"
              </span>
            </p>
            <p>
              Christie and Agatha are on the set of a film starring none other
              than Charlie Chaplin – and a particularly mischievous cat. But
              when the cat’s owner claims that the feline on the set is a fake
              and that the real one is missing, the twins are hired both to
              clear Mr Chaplin’s name and find out what has happened to the real
              Fluffykins.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 144 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> 14th May 2026
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
              <ChristieAgathaBook8EN2 />
            ) : (
              <ChristieAgathaBook8EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook8;
