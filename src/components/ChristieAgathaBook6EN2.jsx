import christieagathabk6_0 from "/assets/christieagathabook6.jpg";

const ChristieAgathaBook6EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk6_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Canada</h3>
          <p>
            <a href="https://a.co/d/3hs8C7P" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/faFjs4r" target="_blank">
              <button className="books-buy-button">Amazon JP</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268192"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://a.co/d/0Wj5Mu8" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook6EN2;
