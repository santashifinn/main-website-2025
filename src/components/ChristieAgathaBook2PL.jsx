import christieagathabk2_0 from "/assets/christieagathabook2pl.jpg";

const ChristieAgathaBook2PL = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="Agencja detektywistyczna Christie i Agaty. Tom 2. Samochodowa wspinaczka"
          />
        </section>
        <section className="books-editions2">
          <h3>Polish Edition</h3>
          <p>
            <span className="italics">
              Agencja detektywistyczna Christie i Agaty. Tom 2. Samochodowa
              wspinaczka
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Tandem
            <br />
            <span className="strong">Published:</span> 10. 9. 2025
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
              href="https://wydawnictwo-tandem.pl/produkt/agencja-detektywistyczna-christie-i-agaty-tom-2-samochodowa-wspinaczka/"
              target="_blank"
            >
              <button className="books-buy-button">Tandem</button>
            </a>
            <a
              href="https://www.gandalf.com.pl/b/agencja-detektywistyczna-christie/"
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

export default ChristieAgathaBook2PL;
