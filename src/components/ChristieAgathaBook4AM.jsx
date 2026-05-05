import christieagathabk4_0 from "/assets/christieagathabook4am.jpg";

const ChristieAgathaBook4AM = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk4_0}
            className="books-editions-img"
            alt="Քրիսթիի և Ագաթայի խուզարկուական գործակալություն. Առևանգում Ռիվիերայում"
          />
        </section>
        <section className="books-editions2">
          <h3>Armenian Edition</h3>
          <p>
            <span className="italics">
              Քրիսթիի և Ագաթայի խուզարկուական գործակալություն. Առևանգում
              Ռիվիերայում
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> ԱՆՏԱՐԵՍ / Antares
            <br />
            <span className="strong">Published:</span> 5. 2026
          </p>
          <p>
            <span className="strong">Translator:</span> Արուս Մարգարյանի / Arous
            Margaryan
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://daran.company.site/Փիփ-Մըրֆի-Քրիսթիի-և-Ագաթայի-խուզարկուական-գործակալություն-Առևանգում-Ռիվիերայում-p833238591"
              target="_blank"
            >
              <button className="books-buy-button">Daran</button>
            </a>
            <a
              href="https://onlinearmenianstore.com/products/pip-murphy-christie-and-agathas-detective-agency-abduction-on-the-riviera"
              target="_blank"
            >
              <button className="books-buy-button">
                Online Armenian Store
              </button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook4AM;
