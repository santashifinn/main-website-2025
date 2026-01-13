import christieagathabk1_0 from "/assets/christieagathabook1pl.jpg";

const ChristieAgathaBook1PL = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Agencja detektywistyczna Christie i Agaty. Tom 1. Zaginione odkrycie"
          />
        </section>
        <section className="books-editions2">
          <h3>Polish Edition</h3>
          <p>
            <span className="italics">
              Agencja detektywistyczna Christie i Agaty. Tom 1. Zaginione
              odkrycie
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Tandem
            <br />
            <span className="strong">Published:</span> 13. 8. 2025
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
              href="https://wydawnictwo-tandem.pl/produkt/agencja-detektywistyczna-christie-i-agaty-tom-1-zaginione-odkrycie/"
              target="_blank"
            >
              <button className="books-buy-button">Tandem</button>
            </a>
            <a
              href="https://www.gandalf.com.pl/b/zaginione-odkrycie-agencja/"
              target="_blank"
            >
              <button className="books-buy-button">Gandalf</button>
            </a>
            <a
              href="https://www.amazon.pl/Agencja-detektywistyczna-Christie-Zaginione-odkrycie/dp/8384122539"
              target="_blank"
            >
              <button className="books-buy-button">Amazon PL</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1PL;
