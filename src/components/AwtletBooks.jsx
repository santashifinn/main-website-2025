import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AwtletBookList from "./AwtletBookList";
import AwtletBook1 from "./AwtletBook1";
import AwtletBook2 from "./AwtletBook2";
import AwtletBook3 from "./AwtletBook3";
import AwtletBook4 from "./AwtletBook4";

const AwtletBooks = () => {
  const [openBookNav, setOpenBookNav] = useState(true);

  const handleOpenBookNav = () => {
    setOpenBookNav(!openBookNav);
  };

  return (
    <>
      <section className="christieagatha-books">
        <h2>
          <span className="accent-books" id="christieagatha">
            A
          </span>
          ssassins Want to Learn English, Too!
        </h2>
        <section className="book-nav-button-container">
          <button className="book-nav-button" onClick={handleOpenBookNav}>
            ▼ SHOW/HIDE BOOK SELECTOR ▼
          </button>
        </section>
        {openBookNav ? <AwtletBookList /> : <p />}
        <Routes>
          <Route path="/" element={<AwtletBook1 />} />
          <Route path="/book1" element={<AwtletBook1 />} />
          <Route path="/book2" element={<AwtletBook2 />} />
          <Route path="/book3" element={<AwtletBook3 />} />
          <Route path="/book4" element={<AwtletBook4 />} />
        </Routes>
      </section>
    </>
  );
};

export default AwtletBooks;
