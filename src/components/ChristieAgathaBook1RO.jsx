import christieagathabk1_0 from "/assets/christieagathabook1ro.jpg";

const ChristieAgathaBook1RO = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Christie și Agatha, Agenție de detectivi. Dispariția unei descoperiri"
          />
        </section>
        <section className="books-editions2">
          <h3>Romanian Edition</h3>
          <p>
            <span className="italics">
              Christie și Agatha, Agenție de detectivi. Dispariția unei
              descoperiri
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Corint Junior
            <br />
            <span className="strong">Published:</span> 11. 2025
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://edituracorint.ro/christie-si-agatha-agentie-de-detectivi-disparitia-unei-descoperiri.html"
              target="_blank"
            >
              <button className="books-buy-button">Corint</button>
            </a>
            <a
              href="https://www.libris.ro/disparitia-unei-descoperiri-pip-murphy-COR978-973-128-984-7--p44754451.html"
              target="_blank"
            >
              <button className="books-buy-button">Libris</button>
            </a>
            <a
              href="https://www.emag.ro/christie-si-agatha-agentie-de-detectivi-disparitia-unei-descoperiri-pip-murphy-jun-1547/pd/DB10K83BM/"
              target="_blank"
            >
              <button className="books-buy-button">eMAG</button>
            </a>{" "}
            <a
              href="https://www.cartepedia.ro/carte/carti-dupa-grupa-de-varsta/8-12-ani/pip-murphy/christie-si-agatha-agentie-de-detectivi-disparitia-unei-descoperiri-vol-1-444417.html"
              target="_blank"
            >
              <button className="books-buy-button">Cartepedia</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1RO;
