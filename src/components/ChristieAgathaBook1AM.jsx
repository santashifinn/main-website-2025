import christieagathabk1_0 from "/assets/christieagathabook1am.jpg";

const ChristieAgathaBook1AM = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Քրիսթիի և Ագաթայի խուզարկուական գործակալություն. Անհետացած հայտնագործությունը"
          />
        </section>
        <section className="books-editions2">
          <h3>Armenian Edition</h3>
          <p>
            <span className="italics">
              Քրիսթիի և Ագաթայի խուզարկուական գործակալություն. Անհետացած
              հայտնագործությունը
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> ԱՆՏԱՐԵՍ / Antares
            <br />
            <span className="strong">Published:</span> 5. 2026
          </p>
          <p>
            <span className="strong">Translator:</span> Արուս Մարգարյանի / Arous
            Margaryan
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://daran.company.site/Փիփ-Մըրֆի-Քրիսթիի-և-Ագաթայի-խուզարկուական-գործակալությունը-Անհետացած-հայտնագործությունը-գիրք-1-p835359462"
              target="_blank"
            >
              <button className="books-buy-button">Daran</button>
            </a>
            <a
              href="https://www.books.am/am/catalog/product/view/id/121843/category/2/"
              target="_blank"
            >
              <button className="books-buy-button">books.am</button>
            </a>
            {/* <a
              href="https://onlinearmenianstore.com/products/pip-murphy-christie-and-agathas-detective-agency-a-tomb-headache"
              target="_blank"
            >
              <button className="books-buy-button">
                Online Armenian Store
              </button>
            </a> */}
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook1AM;
