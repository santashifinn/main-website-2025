import christieagathabk9_0 from "/assets/christieagathabook9.jpg";

const ChristieAgathaBook9EN = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk9_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 9 - A Puzzle in Plane Sight"
          />
        </section>
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 30. 7. 2026
          </p>
          <p>
            <span className="strong">Audiobook narrator:</span> Vanessa Labrie
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/christie-and-agathas-detective-agency-a-puzzle-in-plane-sight/pip-murphy/roberta-tedeschi/9781782268222"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.eu/d/04DxTQ4J" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/p/books/christie-and-agatha-s-detective-agency-a-puzzle-in-plane-sight-pip-murphy/c7a5ddb153c3ad2c"
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

export default ChristieAgathaBook9EN;
