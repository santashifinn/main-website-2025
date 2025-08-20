import { Link } from "react-router-dom";

import christieagathabk1_0 from "/assets/christieagathabook1.jpg";
import christieagathabk1point5_0 from "/assets/christieagathabook1point5.jpg";
import christieagathabk2_0 from "/assets/christieagathabook2.jpg";
import christieagathabk3_0 from "/assets/christieagathabook3.jpg";
import christieagathabk4_0 from "/assets/christieagathabook4.jpg";
import christieagathabk5_0 from "/assets/christieagathabook5.jpg";
import christieagathabk6_0 from "/assets/christieagathabook6.jpg";
import christieagathabk7_0 from "/assets/christieagathabook7.jpg";

import awtletbk1_0 from "/assets/awtletbook1.jpg";
import awtletbk2_0 from "/assets/awtletbook2.jpg";
import awtletbk3_0 from "/assets/awtletbook3.jpg";
import awtletbk4_0 from "/assets/awtletbook4.jpg";

import uselessprince_0 from "/assets/uselessprincecover.jpg";

const Books = () => {
  return (
    <>
      <section className="books">
        <h1>
          <span className="accent-books">B</span>OOKS
        </h1>

        <section className="scroll-links">
          <button
            onClick={() =>
              document
                .getElementById("christieagatha")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h3>
              <span className="accent-books">C</span>hristie and Agatha's
              Detective Agency
            </h3>
          </button>
          <span className="mobile-linebreak">
            <br />
          </span>
          <span className="accent-books">{" • "}</span>
          <span className="mobile-linebreak">
            <br />
          </span>
          <button
            onClick={() =>
              document
                .getElementById("awtlet")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h3>
              <span className="accent-books">A</span>ssassins Want to Learn
              English, Too!
            </h3>
          </button>
          <span className="mobile-linebreak">
            <br />
          </span>
          <span className="accent-books">{" • "}</span>
          <span className="mobile-linebreak">
            <br />
          </span>
          <button
            onClick={() =>
              document
                .getElementById("other")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h3>
              <span className="accent-books">O</span>ther
            </h3>
          </button>
        </section>

        <h2>
          <span className="accent-books" id="christieagatha">
            C
          </span>
          hristie and Agatha's Detective Agency
        </h2>
        <p>
          A series of mystery-adventure books for young readers aged 7+ that
          fictionalise real-life discoveries and events from around the 1920s -
          with a whodunnit twist.
          <br />
          After getting into a scrape, twin sisters
          tomboy Christie and timid Agatha discover that together they make the
          perfect mystery-solving duo!
        </p>
        <p>
          (Published by <span className="strong">Sweet Cherry Publishing</span>,
          written by <span className="strong">Pip Murphy</span> (me!), and
          illustrated by <span className="strong">Roberta Tedeschi</span>, with
          audiobooks read by <span className="strong">Vanessa Labrie</span>)
        </p>
        <section className="books-covers">
          <Link to="/christieandagatha/book1">
            <img
              src={christieagathabk1_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 1 - A Discovery Disappears"
            />
          </Link>{" "}
          <Link to="/christieandagatha/book1point5">
            <img
              src={christieagathabk1point5_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 1.5 - Christmas in Torquay"
            />
          </Link>{" "}
          <Link to="/christieandagatha/book2">
            <img
              src={christieagathabk2_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 2 - Of Mountains and Motors"
            />
          </Link>
          <Link to="/christieandagatha/book3">
            <img
              src={christieagathabk3_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 3 - Tombful of Trouble"
            />
          </Link>
          <Link to="/christieandagatha/book4">
            <img
              src={christieagathabk4_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 4 - Ransom on the Riviera"
            />
          </Link>
          <Link to="/christieandagatha/book5">
            <img
              src={christieagathabk5_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 5 - Genius on the Green Express"
            />
          </Link>
          <Link to="/christieandagatha/book6">
            <img
              src={christieagathabk6_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 6 - To Halt a Heist"
            />
          </Link>
          <Link to="/christieandagatha/book7">
            <img
              src={christieagathabk7_0}
              className="books-covers-img"
              alt="Christie and Agatha's Detective Agency Book 7 - The Composer Crisis"
            />
          </Link>
        </section>
        <h2>
          <span className="accent-books" id="awtlet">
            A
          </span>
          ssassins Want to Learn English, Too!
        </h2>
        <p>
          A series of bilingual (Japanese/English) comedy comics about the shy,
          klutzy assassin Chinatsu Mori and her eccentric English teacher Alice
          Sinclair.
        </p>
        <p>
          (Self-published, written and illustrated by{" "}
          <span className="strong">Pip Murphy</span>
          (me!))
        </p>
        <section className="books-covers">
          <Link to="/awtlet-comics/book1">
            <img
              src={awtletbk1_0}
              className="books-covers-img"
              alt="Assassins Want to Learn English, Too! - Lesson 1"
            />
          </Link>{" "}
          <Link to="/awtlet-comics/book2">
            <img
              src={awtletbk2_0}
              className="books-covers-img"
              alt="Assassins Want to Learn English, Too! - Lesson 2"
            />
          </Link>{" "}
          <Link to="/awtlet-comics/book3">
            <img
              src={awtletbk3_0}
              className="books-covers-img"
              alt="Assassins Want to Learn English, Too! - Lesson 3"
            />
          </Link>{" "}
          <Link to="/awtlet-comics/book4">
            <img
              src={awtletbk4_0}
              className="books-covers-img"
              alt="Assassins Want to Learn English, Too! - Lesson 4"
            />
          </Link>
        </section>
        <h2>
          <span className="accent-books" id="other">
            O
          </span>
          ther
        </h2>
        <section className="books-covers">
          <Link to="/otherbooks/uselessprince">
            <img
              src={uselessprince_0}
              className="books-covers-img"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
            />
          </Link>
        </section>
      </section>
    </>
  );
};

export default Books;
