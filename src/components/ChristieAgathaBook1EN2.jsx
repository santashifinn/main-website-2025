import christieagathabk1_0 from "/assets/christieagathabook1.jpg";

const ChristieAgathaBook1EN2 = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
          />
        </section>
        <section className="books-editions2 books-other-english">
          <h3>Australia</h3>
          <p>
            <a
              href="https://www.amazon.com.au/dp/B09K4C85SQ?ref_=cm_sw_r_ffobk_cp_ud_dp_CVM7MDBT511A0C2Y4H9R"
              target="_blank"
            >
              <button className="books-buy-button">Amazon AU (Kindle)</button>
            </a>
          </p>
          <h3>Canada</h3>
          <p>
            <a href="https://www.amazon.ca/dp/1782267964/" target="_blank">
              <button className="books-buy-button">Amazon CA</button>
            </a>
          </p>
          <h3>Japan</h3>
          <p>
            <a
              href="https://www.amazon.co.jp/dp/B09K4C85SQ?ref_=cm_sw_r_ffobk_cp_ud_dp_KXT05JSC2179B924G2W8"
              target="_blank"
            >
              <button className="books-buy-button">Amazon JP (Kindle)</button>
            </a>
            <a
              href="https://www.kinokuniya.co.jp/f/dsg-02-9781782268147"
              target="_blank"
            >
              <button className="books-buy-button">Kinokuniya</button>
            </a>
          </p>
          <h3>US</h3>
          <p>
            <a href="https://www.amazon.com/dp/1782267964/" target="_blank">
              <button className="books-buy-button">Amazon US</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1EN2;
