import christieagathabk4_0 from "/assets/christieagathabook4de.jpg";

const ChristieAgathaBook4DE = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk4_0}
            className="books-editions-img"
            alt="Detektivagentur Christie & Agatha – Entführung im Grandhotel"
          />
        </section>
        <section className="books-editions2">
          <h3>German Edition</h3>
          <p>
            <span className="italics">
              Detektivagentur Christie & Agatha – Entführung im Grandhotel
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> DTV
            <br />
            <span className="strong">Published:</span> 15. 5. 2026
          </p>
          <p>
            <span className="strong">Translator:</span> Karolin Viseneber
            <br />
            <span className="strong">Audiobook narrator:</span> Anna Thalbach
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.thalia.de/shop/home/artikeldetails/A1076984928"
              target="_blank"
            >
              <button className="books-buy-button">Thalia</button>
            </a>
            <a href="https://amzn.eu/d/9bR8KoS" target="_blank">
              <button className="books-buy-button">Amazon DE</button>
            </a>
            <a
              href="https://www.hugendubel.de/de/buch_gebunden/pip_murphy-detektivagentur_christie_agatha_entfuehrung_im_grandhotel-51981177-produkt-details.html"
              target="_blank"
            >
              <button className="books-buy-button">Hugendubel</button>
            </a>
            <a
              href="https://www.genialokal.de/Produkt/Pip-Murphy/Detektivagentur-Christie-Agatha-Raub-im-Wuestensand_lid_55331334.html"
              target="_blank"
            >
              <button className="books-buy-button">
                Kaufen Sie bei Ihrer lokalen Buchhandlung
              </button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook4DE;
