import christieagathabk1_0 from "/assets/christieagathabook1sk.jpg";

const ChristieAgathaBook1SK = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Detektívna agentúra Agatha a Christie: Stratený objav"
          />
        </section>
        <section className="books-editions2">
          <h3>Slovak Edition</h3>
          <p>
            <span className="italics">
              Detektívna agentúra Agatha a Christie: Stratený objav
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Albatros Slovakia
            <br />
            <span className="strong">Published:</span> 4. 2024
          </p>
          <p>
            <span className="strong">Translator:</span> Júlia Zelenčíková
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.albatrosmedia.sk/tituly/25729197/detektivna-agentura-agatha-a-christie-strateny-objav/"
              target="_blank"
            >
              <button className="books-buy-button">Albatros Media</button>
            </a>
            <a
              href="https://www.martinus.sk/2833577-detektivna-agentura-agatha-a-christie-strateny-objav/kniha"
              target="_blank"
            >
              <button className="books-buy-button">Martinus</button>
            </a>
            <a
              href="https://www.alza.sk/media/detektivna-agentura-agatha-a-christie-strateny-objav-d12383408.htm"
              target="_blank"
            >
              <button className="books-buy-button">Alza</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1SK;
