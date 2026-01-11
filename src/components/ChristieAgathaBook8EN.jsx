import christieagathabk8_0 from "/assets/christieagathabook8.jpg";

const ChristieAgathaBook8EN = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk8_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 8 - A Curious Catastrophe"
          />
        </section>
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 14. 5. 2026
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/christie-and-agathas-detective-agency-a-curious-catastrophe/pip-murphy/roberta-tedeschi/9781782268215"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.eu/d/dbb199s" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/p/books/christie-and-agatha-s-detective-agency-a-curious-catastrophe-pip-murphy/aaca40d72ea2174d"
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

export default ChristieAgathaBook8EN;
