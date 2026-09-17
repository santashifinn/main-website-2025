import christieagathabk9_0 from "/assets/christieagathabook9pl.jpg";

const ChristieAgathaBook9PL = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk9_0}
            className="books-editions-img"
            alt="Agencja detektywistyczna Christie i Agaty. Tom 9. Lot z widokiem na zagadkę"
          />
        </section>
        <section className="books-editions2">
          <h3>Polish Edition</h3>
          <p>
            <span className="italics">
              Agencja detektywistyczna Christie i Agaty. Tom 9. Lot z widokiem
              na zagadkę
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Tandem
            <br />
            <span className="strong">Published:</span> 09. 10. 2026
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
              href="https://wydawnictwo-tandem.pl/produkt/agencja-detektywistyczna-christie-i-agaty-tom-6-jak-powstrzymac-wielki-skok/"
              target="_blank"
            >
              <button className="books-buy-button">Tandem</button>
            </a> */}
            <a
              href="https://www.gandalf.com.pl/lot-z-widokiem-na-zagadke-agencja-detektywistyczna-christie-i-agaty-tom-9-p-2059613.html"
              target="_blank"
            >
              <button className="books-buy-button">Gandalf</button>
            </a>
            {/* <a href="https://amzn.eu/d/04EubL2u" target="_blank">
              <button className="books-buy-button">Amazon PL</button>
            </a> */}
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook9PL;
