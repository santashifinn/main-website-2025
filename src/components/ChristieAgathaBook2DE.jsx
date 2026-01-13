import christieagathabk2_0 from "/assets/christieagathabook2de.jpg";

const ChristieAgathaBook2DE = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="Detektivagentur Christie & Agatha – Sabotage am Automobil"
          />
        </section>
        <section className="books-editions2">
          <h3>German Edition</h3>
          <p>
            <span className="italics">
              Detektivagentur Christie & Agatha – Sabotage am Automobil
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> DTV
            <br />
            <span className="strong">Published:</span> 14. 8. 2025
          </p>
          <p>
            <span className="strong">Translator:</span> Karolin Viseneber
            <br />
            <span className="strong">Audiobook narrator:</span> Anna Thalbach
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.thalia.de/shop/home/artikeldetails/A1074858450"
              target="_blank"
            >
              <button className="books-buy-button">Thalia</button>
            </a>
            <a href="https://amzn.eu/d/hBpYCCe" target="_blank">
              <button className="books-buy-button">Amazon DE</button>
            </a>
            <a
              href="https://www.hugendubel.de/de/buch_gebunden/pip_murphy-detektivagentur_christie_agatha_sabotage_am_automobil-50358875-produkt-details.html"
              target="_blank"
            >
              <button className="books-buy-button">Hugendubel</button>
            </a>
            <a
              href="https://www.genialokal.de/Produkt/Pip-Murphy/Detektivagentur-Christie-Agatha-Sabotage-am-Automobil_lid_55331296.html"
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

export default ChristieAgathaBook2DE;
