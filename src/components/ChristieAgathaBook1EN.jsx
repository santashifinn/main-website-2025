import christieagathabk1_0 from "/assets/christieagathabook1.jpg";

const ChristieAgathaBook1EN = () => {
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
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 9. 2021
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/a-discovery-disappears/pip-murphy/roberta-tedeschi/9781782268147"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.to/3WRi4N2" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/books/a-discovery-disappears/9781782268147"
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

export default ChristieAgathaBook1EN;
