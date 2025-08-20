import christieagathabk7_0 from "/assets/christieagathabook7.jpg";

const ChristieAgathaBook7EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk7_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Canada</h3>
          <p>
            <a href="https://a.co/d/1BGzixp" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/bO2vv8d" target="_blank">
              <button className="books-buy-button">Amazon JP</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781802630831"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://a.co/d/8zpBwNa" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook7EN2;
