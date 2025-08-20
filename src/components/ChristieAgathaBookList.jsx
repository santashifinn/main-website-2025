import { Link } from "react-router-dom";

import christieagathabk1_0 from "/assets/christieagathabook1.jpg";
import christieagathabk1point5_0 from "/assets/christieagathabook1point5.jpg";
import christieagathabk2_0 from "/assets/christieagathabook2.jpg";
import christieagathabk3_0 from "/assets/christieagathabook3.jpg";
import christieagathabk4_0 from "/assets/christieagathabook4.jpg";
import christieagathabk5_0 from "/assets/christieagathabook5.jpg";
import christieagathabk6_0 from "/assets/christieagathabook6.jpg";
import christieagathabk7_0 from "/assets/christieagathabook7.jpg";

const ChristieAgathaBookList = () => {
  return (
    <>
      <section className="books-list">
        <section className="books-covers">
          <Link to="/christieandagatha/book1">
            <img
              src={christieagathabk1_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
            />
          </Link>{" "}
          <Link to="/christieandagatha/book1point5">
            <img
              src={christieagathabk1point5_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 1.5 - Christmas in Torquay"
            />
          </Link>{" "}
          <Link to="/christieandagatha/book2">
            <img
              src={christieagathabk2_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
            />
          </Link>
          <Link to="/christieandagatha/book3">
            <img
              src={christieagathabk3_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
            />
          </Link>
          <Link to="/christieandagatha/book4">
            <img
              src={christieagathabk4_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
            />
          </Link>
          <Link to="/christieandagatha/book5">
            <img
              src={christieagathabk5_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 5 - Genius on the Green Express"
            />
          </Link>
          <Link to="/christieandagatha/book6">
            <img
              src={christieagathabk6_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
            />
          </Link>
          <Link to="/christieandagatha/book7">
            <img
              src={christieagathabk7_0}
              className="books-covers-img-smol"
              alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
            />
          </Link>
        </section>
      </section>
    </>
  );
};

export default ChristieAgathaBookList;
