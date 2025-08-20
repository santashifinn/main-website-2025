import christieagathabk2_0 from "/assets/christieagathabook2.jpg";

const ChristieAgathaBook2EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Australia</h3>
          <p>
            <a
              href="https://www.amazon.com.au/dp/B09TG67VKK?ref_=cm_sw_r_ffobk_cp_ud_dp_Q9JPSR6V219YFR07QGMV"
              target="_blank"
            >
              <button className="books-buy-button">Amazon AU (Kindle)</button>
            </a>
          </p>
          <h3>Canada</h3>
          <p>
            <a href="https://www.amazon.ca/dp/1782268308/" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/j4Fq9jM" target="_blank">
              <button className="books-buy-button">Amazon JP (Kindle)</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268154"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://www.amazon.com/dp/1782268308/" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook2EN2;
