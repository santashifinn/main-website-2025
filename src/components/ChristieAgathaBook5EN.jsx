import christieagathabk5_0 from "/assets/christieagathabook5.jpg";

const ChristieAgathaBook5EN = () => {
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
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 7. 9. 2023
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/genius-on-the-green-express/pip-murphy/roberta-tedeschi/9781782268185"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.eu/d/6cXeEIf" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/p/books/genius-on-the-green-express-pip-murphy/7447219"
              target="_blank"
            >
              <button className="books-buy-button">Bookshop.org</button>
            </a>
            <a
              href="http://www.booksellers.org.uk/bookshopsearch"
              target="_blank"
            >
              <button className="books-buy-button">
                Find your local bookshop
              </button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook5EN;
