import christieagathabk1_0 from "/assets/christieagathabook1de.jpg";

const ChristieAgathaBook1DE = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Detektivagentur Christie & Agatha – Ein Beweisstück verschwindet"
          />
        </section>
        <section className="books-editions2">
          <h3>German Edition</h3>
          <p>
            <span className="italics">
              Detektivagentur Christie & Agatha – Ein Beweisstück verschwindet
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> DTV
            <br />
            <span className="strong">Published:</span> 13. 3. 2025
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.thalia.de/shop/home/artikeldetails/A1073233429"
              target="_blank"
            >
              <button className="books-buy-button">Thalia</button>
            </a>
            <a href="https://amzn.eu/d/iOOaHSj" target="_blank">
              <button className="books-buy-button">Amazon DE</button>
            </a>
            <a
              href="https://www.hugendubel.de/de/buch_gebunden/pip_murphy-detektivagentur_christie_agatha_ein_beweisstueck_verschwindet-49252436-produkt-details.html"
              target="_blank"
            >
              <button className="books-buy-button">Hugendubel</button>
            </a>
            <a
              href="https://www.genialokal.de/Produkt/Pip-Murphy/Detektivagentur-Christie-Agatha-Ein-Beweisstueck-verschwindet_lid_54119704.html"
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

export default ChristieAgathaBook1DE;
