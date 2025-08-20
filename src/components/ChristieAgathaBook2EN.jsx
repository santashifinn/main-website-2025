import christieagathabk2_0 from "/assets/christieagathabook2.jpg";

const ChristieAgathaBook2EN = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
          />
        </section>
        <section className="books-editions2">
          <h3>English Edition</h3>
          <p>
            <span className="strong">Publisher:</span> Sweet Cherry Publishing
            <br />
            <span className="strong">Published:</span> 2. 2022
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.waterstones.com/book/of-mountains-and-motors/pip-murphy/roberta-tedeschi/9781782268154"
              target="_blank"
            >
              <button className="books-buy-button">Waterstones</button>
            </a>
            <a href="https://amzn.to/3x0SzPf" target="_blank">
              <button className="books-buy-button">Amazon UK</button>
            </a>
            <a
              href="https://uk.bookshop.org/books/of-mountains-motors/9781782268154"
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

export default ChristieAgathaBook2EN;
