import christieagathabk6_0 from "/assets/christieagathabook6.jpg";

const ChristieAgathaBook6EN = () => {
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
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 1. 2. 2024
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/christie-and-agathas-detective-agency-to-halt-a-heist/pip-murphy/roberta-tedeschi/9781782268192"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.eu/d/cANyl0H" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/p/books/christie-and-agatha-s-detective-agency-to-halt-a-heist-pip-murphy/7592519"
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

export default ChristieAgathaBook6EN;
