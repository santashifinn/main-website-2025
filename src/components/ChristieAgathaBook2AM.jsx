import christieagathabk2_0 from "/assets/christieagathabook2am.jpg";

const ChristieAgathaBook2AM = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="Քրիսթիի և Ագաթայի խուզարկուական գործակալություն. Ավտոմեքենան լեռան վրա"
          />
        </section>
        <section className="books-editions2">
          <h3>Armenian Edition</h3>
          <p>
            <span className="italics">
              Քրիսթիի և Ագաթայի խուզարկուական գործակալություն. Ավտոմեքենան լեռան
              վրա
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
              href="https://daran.company.site/Փիփ-Մըրֆի-Քրիսթիի-և-Ագաթայի-խուզարկուական-գործակալությունը-Ավտոմեքենան-լեռան-վրա-գիրք-2-p835383298"
              target="_blank"
            >
              <button className="books-buy-button">Daran</button>
            </a>
            <a
              href="https://www.books.am/am/catalog/product/view/id/121844/category/2/"
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

export default ChristieAgathaBook2AM;
