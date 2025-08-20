import christieagathabk3_0 from "/assets/christieagathabook3.jpg";

const ChristieAgathaBook3EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk3_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Australia</h3>
          <p>
            <a
              href="https://www.amazon.com.au/dp/B0BDG25DXR?ref_=cm_sw_r_ffobk_cp_ud_dp_05VP9TVVDX49EF2XT8R9"
              target="_blank"
            >
              <button className="books-buy-button">Amazon AU (Kindle)</button>
            </a>
          </p>
          <h3>Canada</h3>
          <p>
            <a href="https://a.co/d/fJOJ393" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a href="https://amzn.asia/d/j3gmDoP" target="_blank">
              <button className="books-buy-button">Amazon JP (Kindle)</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268161"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://a.co/d/iRwaNec" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook3EN2;
