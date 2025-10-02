import christieagathabk3_0 from "/assets/christieagathabook3pl.jpg";

const ChristieAgathaBook3PL = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk3_0}
            className="books-editions-img"
            alt="Agencja detektywistyczna Christie i Agaty. Tom 3. Kradzież w
              Dolinie Królów"
          />
        </section>
        <section className="books-editions2">
          <h3>Polish Edition</h3>
          <p>
            <span className="italics">
              Agencja detektywistyczna Christie i Agaty. Tom 3. Kradzież w
              Dolinie Królów
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Tandem
            <br />
            <span className="strong">Published:</span> 30. 9. 2025
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://wydawnictwo-tandem.pl/produkt/agencja-detektywistyczna-christie-i-agaty-tom-2-samochodowa-wspinaczka/"
              target="_blank"
            >
              <button className="books-buy-button">Tandem</button>
            </a>
            <a
              href="https://www.gandalf.com.pl/b/kradziez-w-dolinie-krolow-agencja/"
              target="_blank"
            >
              <button className="books-buy-button">Gandalf</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook3PL;
