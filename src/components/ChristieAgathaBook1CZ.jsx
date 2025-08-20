import christieagathabk1_0 from "/assets/christieagathabook1cz.jpg";

const ChristieAgathaBook1CZ = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Agáta, Kristie a jejich detektivní kancelář - Ukradený objev"
          />
        </section>
        <section className="books-editions2">
          <h3>Czech Edition</h3>
          <p>
            <span className="italics">
              Agáta, Kristie a jejich detektivní kancelář - Ukradený objev
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> GRADA
            <br />
            <span className="strong">Published:</span> 12. 3. 2025
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.grada.cz/agata-kristie-a-jejich-detektivni-kancelar-14000/"
              target="_blank"
            >
              <button className="books-buy-button">Grada</button>
            </a>
            <a
              href="https://www.alza.cz/media/agata-kristie-a-jejich-detektivni-kancelar-ukradeny-objev-d12860878.htm"
              target="_blank"
            >
              <button className="books-buy-button">Alza</button>
            </a>
            <a
              href="https://www.luxor.cz/v/2095501/agata-kristie-a-jejich-detektivni-kancelar"
              target="_blank"
            >
              <button className="books-buy-button">Luxor</button>
            </a>
            <a
              href="https://www.knihazknihovny.cz/shop/detail/687529-ukradeny-objev"
              target="_blank"
            >
              <button className="books-buy-button">Kniha z knihovny</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1CZ;
