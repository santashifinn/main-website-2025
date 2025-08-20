import christieagathabk1_0 from "/assets/christieagathabook1tr.jpg";

const ChristieAgathaBook1TR = () => {
  return (
    <>
      <section className="books-editions">
        <section className="books-editions1">
          <img
            src={christieagathabk1_0}
            className="books-editions-img"
            alt="Christie ve Agatha'nın Dedektiflik Bürosu: Kaybolan Keşif"
          />
        </section>
        <section className="books-editions2">
          <h3>Turkish Edition</h3>
          <p>
            <span className="italics">
              Christie ve Agatha'nın Dedektiflik Bürosu: Kaybolan Keşif
            </span>
          </p>
          <p>
            <span className="strong">Publisher:</span> Ren Kitap
            <br />
            <span className="strong">Published:</span> 26. 10. 2023
          </p>
          <h3>Where to Buy</h3>
          <p>
            <a
              href="https://www.renkitap.com/urun/christie-ve-agatha-dedektiflik-burosu-kaybolan-kesif-pip-murphy-9786258318395"
              target="_blank"
            >
              <button className="books-buy-button">Ren Kitap</button>
            </a>
            <a href="https://amzn.eu/d/2Gn3bED" target="_blank">
              <button className="books-buy-button">Amazon TR</button>
            </a>
            <a
              href="https://www.dr.com.tr/kitap/christie-ve-agathanin-dedektiflik-burosu-kaybolan-kesif/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0002024884001"
              target="_blank"
            >
              <button className="books-buy-button">D&R</button>
            </a>
            <a
              href="https://www.hepsiburada.com/christie-ve-agatha-dedektiflik-burosu-kaybolan-kesif-pip-murphy-pm-HBC00003UF0T9"
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

export default ChristieAgathaBook1TR;
