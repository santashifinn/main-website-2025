import { useState } from "react";

import christieagathabk1point5_0 from "/assets/christieagathabook1point5.jpg";

import christieagathabk1point5_book from "/assets/christieagathabook1point5ebook.pdf";

const ChristieAgathaBook1Point5 = () => {
  return (
    <>
      <section className="books-individual">
        <section className="books-individual1">
          <img
            src={christieagathabk1point5_0}
            className="books-covers-img-big"
            alt="Christie and Agatha's Detective Agency Book 1.5 -  Christmas in Torquay"
          />
        </section>
        <section className="books-individual2">
          <section className="books-individual-titles">
            <h3>Book 1.5: Christmas in Torquay</h3>
            <p />
          </section>

          <section className="books-individual-info">
            <p>
              <span className="italics">
                "Isn't Auguste here for the carol singing yet?" asked Christie.
                "It's starting to get dark."
              </span>
            </p>
            <p>
              An exclusive free short Christmas story set between Book 1, A
              Discovery Disappears and Book 2, Of Mountains and Motors. Christie
              and Agatha go carol singing with their new friend Auguste and make
              some discoveries along the way!
            </p>
            <p>
              <span className="strong">Reading age:</span> 7 years+
              <br />
              <span className="strong">Length:</span> 41 pages
              <br />
              <span className="strong">Format:</span> e-book / video
              <br />
              <span className="strong">Publication date:</span> December 2021
            </p>
          </section>
          <section className="books-individual-buy">
            <h3>E-book</h3>
            <a href={christieagathabk1point5_book} target="_blank">
              <button className="books-buy-button">Download the ebook</button>
            </a>
            <p>
              {" "}
              *I wrote this short story pro gratis and it is available for free
              here and from <span className="italics">Sweet Cherry</span>, so
              please avoid/report any sites trying to monetise it!
            </p>

            <h3>Video</h3>
            <iframe
              id="videoframebig"
              src="https://www.youtube-nocookie.com/embed/v729w8aCeY0?rel=0&fs=1&modestbranding=1&widget_referrer=URL"
              allowfullscreen
              className="video-player"
            ></iframe>
          </section>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1Point5;
