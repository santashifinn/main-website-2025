import christieagathabk5_0 from "/assets/christieagathabook5pl.jpg";

const ChristieAgathaBook5PL = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk5_0}
            className="books-editions-img"
            alt="Agencja detektywistyczna Christie i Agaty. Tom 5. Geniusz w Zielonym Ekspresie"
          />
        </section>
        <section className="books-editions2">
          <h3>Polish Edition</h3>
          <p>
            <span className="italics">
              Agencja detektywistyczna Christie i Agaty. Tom 5. Geniusz w
              Zielonym Ekspresie
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Tandem
            <br />
            <span className="strong">Published:</span> 06. 02. 2026
          </p>
          <p>
            <span className="strong">Translator:</span> Marta Szelichowska
            <br />
            <span className="strong">Audiobook narrator:</span> Lena
            Schimscheiner
          </p>
          <h3>Where to Buy</h3>
          <p>
            {/* <a
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
            </a> */}
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook5PL;
