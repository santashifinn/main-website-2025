import { Link } from "react-router-dom";

import awtletbk1_0 from "/assets/awtletbook1.jpg";
import awtletbk2_0 from "/assets/awtletbook2.jpg";
import awtletbk3_0 from "/assets/awtletbook3.jpg";
import awtletbk4_0 from "/assets/awtletbook4.jpg";

const AwtletBookList = () => {
  return (
    <>
      <section className="books-list">
        <section className="books-covers">
          <Link to="/awtlet-comics/book1">
            <img
              src={awtletbk1_0}
              className="books-covers-img-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 1"
            />
          </Link>{" "}
          <Link to="/awtlet-comics/book2">
            <img
              src={awtletbk2_0}
              className="books-covers-img-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 2"
            />
          </Link>{" "}
          <Link to="/awtlet-comics/book3">
            <img
              src={awtletbk3_0}
              className="books-covers-img-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 3"
            />
          </Link>
          <Link to="/awtlet-comics/book4">
            <img
              src={awtletbk4_0}
              className="books-covers-img-smol"
              alt="Assassins Want to Learn English, Too! - Lesson 4"
            />
          </Link>
        </section>
      </section>
    </>
  );
};

export default AwtletBookList;
