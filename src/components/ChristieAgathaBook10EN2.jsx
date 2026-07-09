import christieagathabk10_0 from "/assets/christieagathabook10.jpg";

const ChristieAgathaBook10EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk10_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 10 - A Mystery Manifests"
          />
        </section>
        <section className="books-editions2 books-other-english">
          {/* <h3>Canada</h3>
          <p>
            <a href="https://a.co/d/1BGzixp" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p> */}
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/06VtlcDn" target="_blank">
              <button className="books-buy-button">Amazon JP</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268239"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          {/* <h3>US</h3>
          <p>
            <a href="https://a.co/d/8zpBwNa" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p> */}
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook10EN2;
