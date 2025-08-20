import christieagathabk1_0 from "/assets/christieagathabook1ar.jpg";

const ChristieAgathaBook1AR = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="اختفاء الاكتشاف"
          />
        </section>
        <section className="books-editions2">
          <h3>Arabic Edition</h3>
          <p>
            <span className="italics">اختفاء الاكتشاف</span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Jarir Bookstore
            <br />
            <span className="strong">Published:</span> 1. 2024
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://jarirreader.com/book/41678/اختفاء-الاكتشاف"
              target="_blank"
            >
              <button className="books-buy-button">Jarir Reader</button>
            </a>
            <a href="https://amzn.eu/d/4Gi7KX8" target="_blank">
              <button className="books-buy-button">Amazon AE</button>
            </a>
            <a
              href="https://asfar.io/product/discovery-disappears-pip-murphy/"
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

export default ChristieAgathaBook1AR;
