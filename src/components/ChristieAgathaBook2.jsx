import { useState } from "react";

import christieagathabk2_0 from "/assets/christieagathabook2.jpg";
import christieagathabk2_1 from "/assets/christieagathabook2preview0.jpg";
import christieagathabk2_2 from "/assets/christieagathabook2preview1.jpg";
import christieagathabk2_3 from "/assets/christieagathabook2preview2.jpg";

import reviewsgoodreads from "/assets/contactgoodreadsreviews.png";
import ChristieAgathaBook2EN from "./ChristieAgathaBook2EN";
import ChristieAgathaBook2EN2 from "./ChristieAgathaBook2EN2";
import ChristieAgathaBook2DE from "./ChristieAgathaBook2DE";
import ChristieAgathaBook2TR from "./ChristieAgathaBook2TR";
import ChristieAgathaBook2AR from "./ChristieAgathaBook2AR";
import ChristieAgathaBook2PL from "./ChristieAgathaBook2PL";
import ChristieAgathaBook2CH from "./ChristieAgathaBook2CH";

const ChristieAgathaBook2 = () => {
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
            src={christieagathabk2_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
          />
          <p>
            <span className="strong">PREVIEW:</span>
          </p>
          <section className="books-preview-container">
            <img
              src={christieagathabk2_1}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
              onClick={() => showImage(christieagathabk2_1)}
            />{" "}
            <img
              src={christieagathabk2_2}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
              onClick={() => showImage(christieagathabk2_2)}
            />{" "}
            <img
              src={christieagathabk2_3}
              className="books-preview"
              alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
              onClick={() => showImage(christieagathabk2_3)}
            />
          </section>
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 2: Of Mountains and Motors</h3>
            <p />
          </section>
          <section className="books-individual-reviews">
            <a
              href="https://www.goodreads.com/book/show/58585108-christie-and-agatha-s-detective-agency"
              target="_blank"
            >
              <img className="books-reviews-icons" src={reviewsgoodreads}></img>
            </a>
            <p>
              <button className="text-links">
                ★{" "}
                <span className="underline">
                  <a
                    href="https://www.amazon.co.uk/review/create-review/?channel=glance-detail&asin=B09TG67VKK"
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
                    href="https://www.goodreads.com/review/edit/58585108"
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
                "His intent is more than clear: he'd rather see me and my car
                lost, than for us to reach the summit."
              </span>
            </p>
            <p>
              Many are unhappy about Mr Alexander Jr's daring drive to the
              summit of Ben Nevis, but who is trying to sabotage the
              record-setting expedition? Willing passengers, Christie and Agatha
              are keen to embark on a rip-roaring adventure, but soon they're
              embroiled in a thicker plot than they bargained for.
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 128 pages
              <br />
              <span className="strong">Format:</span> Paperback book
              <br />
              <span className="strong">Publication date:</span> February 2022
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
              <span className="accent-books">{" • "}</span>{" "}
              <button onClick={() => setBookEdition("CH")}>
                <span className="underline">
                  {bookEdition === "CH" ? (
                    <span className="strong">Chinese</span>
                  ) : (
                    "Chinese"
                  )}
                </span>
              </button>
            </p>

            {bookEdition === "DE" ? (
              <ChristieAgathaBook2DE />
            ) : bookEdition === "PL" ? (
              <ChristieAgathaBook2PL />
            ) : bookEdition === "CH" ? (
              <ChristieAgathaBook2CH />
            ) : bookEdition === "TR" ? (
              <ChristieAgathaBook2TR />
            ) : bookEdition === "AR" ? (
              <ChristieAgathaBook2AR />
            ) : bookEdition === "EN2" ? (
              <ChristieAgathaBook2EN2 />
            ) : (
              <ChristieAgathaBook2EN />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook2;
