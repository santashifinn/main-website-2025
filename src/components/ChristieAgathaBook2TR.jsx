import christieagathabk2_0 from "/assets/christieagathabook2tr.jpg";

const ChristieAgathaBook2TR = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk2_0}
            className="books-editions-img"
            alt="Christie ve Agatha'nın Dedektiflik Bürosu: Dağa Çıkan Arabanın
              Sırrı"
          />
        </section>
        <section className="books-editions2">
          <h3>Turkish Edition</h3>
          <p>
            <span className="italics">
              Christie ve Agatha'nın Dedektiflik Bürosu: Dağa Çıkan Arabanın
              Sırrı
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Ren Kitap
            <br />
            <span className="strong">Published:</span> 20. 2. 2024
          </p>
          <p>
            <span className="strong">Translator:</span> Özge Nur Küskün
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.renkitap.com/urun/daga-cikan-arabanin-sirri-pip-murphy-9786256943650"
              target="_blank"
            >
              <button className="books-buy-button">Ren Kitap</button>
            </a>
            <a href="https://amzn.eu/d/2OBksn2" target="_blank">
              <button className="books-buy-button">Amazon TR</button>
            </a>
            <a
              href="https://www.dr.com.tr/kitap/daga-cikan-arabanin-sirri-christie-ve-agathanin-dedektiflik-burosu/pip-murphy/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0002103987001"
              target="_blank"
            >
              <button className="books-buy-button">D&R</button>
            </a>
            <a
              href="https://www.hepsiburada.com/daga-cikan-arabanin-sirri-pm-HBC00005Y59B2"
              target="_blank"
            >
              <button className="books-buy-button">Hepsiburada</button>
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBook2TR;
