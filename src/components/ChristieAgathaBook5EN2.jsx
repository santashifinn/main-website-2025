import christieagathabk5_0 from "/assets/christieagathabook5.jpg";

const ChristieAgathaBook5EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk5_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 5 - Genius on the Green Express"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Canada</h3>
          <p>
            <a href="https://a.co/d/c5cetYE" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/bl0vK0p" target="_blank">
              <button className="books-buy-button">Amazon JP</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268185"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://a.co/d/bUIDJ3Y" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook5EN2;
