import christieagathabk4_0 from "/assets/christieagathabook4.jpg";

const ChristieAgathaBook4EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk4_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Canada</h3>
          <p>
            <a href="https://a.co/d/c84ES8P" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/6rpEAnU" target="_blank">
              <button className="books-buy-button">Amazon JP</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268178"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://a.co/d/7WVm4MP" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook4EN2;
