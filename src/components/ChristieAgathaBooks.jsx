import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ChristieAgathaBookList from "./ChristieAgathaBookList";
import ChristieAgathaBook1 from "./ChristieAgathaBook1";
import ChristieAgathaBook1Point5 from "./ChristieAgathaBook1Point5";
import ChristieAgathaBook2 from "./ChristieAgathaBook2";
import ChristieAgathaBook3 from "./ChristieAgathaBook3";
import ChristieAgathaBook4 from "./ChristieAgathaBook4";
import ChristieAgathaBook5 from "./ChristieAgathaBook5";
import ChristieAgathaBook6 from "./ChristieAgathaBook6";
import ChristieAgathaBook7 from "./ChristieAgathaBook7";
import ChristieAgathaBook8 from "./ChristieAgathaBook8";

const ChristieAgathaBooks = () => {
    const [openBookNav, setOpenBookNav] = useState(true);

    const handleOpenBookNav = () => {
      setOpenBookNav(!openBookNav);
    };
    
  return (
    <>
      <section className="christieagatha-books">
        <h2>
          <span className="accent-books" id="christieagatha">
            C
          </span>
          hristie and Agatha's Detective Agency
        </h2>
        <section className="book-nav-button-container">
          <button className="book-nav-button" onClick={handleOpenBookNav}>
            ▼ SHOW/HIDE BOOK SELECTOR ▼
          </button>
        </section>
        {openBookNav ? <ChristieAgathaBookList /> : <p />}
        <Routes>
          <Route path="/" element={<ChristieAgathaBook1 />} />
          <Route path="/book1" element={<ChristieAgathaBook1 />} />
          <Route path="/book1point5" element={<ChristieAgathaBook1Point5 />} />
          <Route path="/book2" element={<ChristieAgathaBook2 />} />
          <Route path="/book3" element={<ChristieAgathaBook3 />} />
          <Route path="/book4" element={<ChristieAgathaBook4 />} />
          <Route path="/book5" element={<ChristieAgathaBook5 />} />
          <Route path="/book6" element={<ChristieAgathaBook6 />} />
          <Route path="/book7" element={<ChristieAgathaBook7 />} />
          <Route path="/book8" element={<ChristieAgathaBook8 />} />
        </Routes>
      </section>
    </>
  );
};

export default ChristieAgathaBooks;
