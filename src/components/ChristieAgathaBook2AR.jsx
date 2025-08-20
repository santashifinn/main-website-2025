import christieagathabk2_0 from "/assets/christieagathabook2ar.jpg";

const ChristieAgathaBook2AR = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="جبال وعربات"
          />
        </section>
        <section className="books-editions2">
          <h3>Arabic Edition</h3>
          <p>
            <span className="italics">جبال وعربات</span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Jarir Bookstore
            <br />
            <span className="strong">Published:</span> 1. 2024
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://jarirreader.com/book/41679/جبال-و-عربات"
              target="_blank"
            >
              <button className="books-buy-button">Jarir Reader</button>
            </a>
            <a href="https://amzn.eu/d/dXzs7DN" target="_blank">
              <button className="books-buy-button">Amazon AE</button>
            </a>
            <a
              href="https://asfar.io/product/mountains-and-motors-pip-murphy/"
              target="_blank"
            >
              <button className="books-buy-button">Asfar</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook2AR;
