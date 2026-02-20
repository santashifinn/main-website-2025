import christieagathabk4_0 from "/assets/christieagathabook4pl.jpg";

const ChristieAgathaBook4PL = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk4_0}
            className="books-editions-img"
            alt="Agencja detektywistyczna Christie i Agaty. Tom 4. Okup na Riwierze"
          />
        </section>
        <section className="books-editions2">
          <h3>Polish Edition</h3>
          <p>
            <span className="italics">
              Agencja detektywistyczna Christie i Agaty. Tom 4. Okup na Riwierze
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Tandem
            <br />
            <span className="strong">Published:</span> 12. 11. 2025
          </p>
          <p>
            <span className="strong">Translator:</span> Marta Szelichowska
            <br />
            <span className="strong">Audiobook narrator:</span> Lena
            Schimscheiner
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://wydawnictwo-tandem.pl/produkt/agencja-detektywistyczna-christie-i-agaty-tom-4-okup-na-riwierze/"
              target="_blank"
            >
              <button className="books-buy-button">Tandem</button>
            </a>
            <a
              href="https://www.gandalf.com.pl/b/okup-na-riwierze-agencja/"
              target="_blank"
            >
              <button className="books-buy-button">Gandalf</button>
            </a>
            <a href="https://amzn.eu/d/0d2GC1eM" target="_blank">
              <button className="books-buy-button">Amazon PL</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook4PL;
