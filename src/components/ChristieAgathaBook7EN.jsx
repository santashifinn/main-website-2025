import christieagathabk7_0 from "/assets/christieagathabook7.jpg";

const ChristieAgathaBook7EN = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk7_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
          />
        </section>
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 25. 7. 2024
          </p>
          <p>
            <span className="strong">Audiobook narrator:</span> Vanessa Labrie
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/christie-and-agathas-detective-agency-the-composer-crisis/pip-murphy/roberta-tedeschi/9781802630831"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.eu/d/2zQSCyA" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/p/books/christie-and-agatha-s-detective-agency-the-composer-crisis-pip-murphy/7671637"
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

export default ChristieAgathaBook7EN;
