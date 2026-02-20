import christieagathabk2_0 from "/assets/christieagathabook2ch.jpg";

const ChristieAgathaBook2CH = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="克里斯蒂和阿加莎侦探社: 车轮上的阴谋"
          />
        </section>
        <section className="books-editions2">
          <h3>Chinese Edition</h3>
          <p>
            <span className="italics">
              克里斯蒂和阿加莎侦探社: 车轮上的阴谋
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> 海豚出版社 / Dolphin
            Books
            <br />
            <span className="strong">Published:</span> 1. 2026
          </p>
          <p>
            <span className="strong">Translator:</span> 徐匡
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://world.taobao.com/item/SWo4YVZydnFqU0plNFJ1RWFnNTlJdz09.htm"
              target="_blank"
            >
              <button className="books-buy-button">Taobao</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook2CH;
