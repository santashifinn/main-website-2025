import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import OtherBookList from "./OtherBookList";
import UselessPrince from "./UselessPrince";

const OtherBooks = () => {
  const [openBookNav, setOpenBookNav] = useState(true);

  const handleOpenBookNav = () => {
    setOpenBookNav(!openBookNav);
  };

  return (
    <>
      <section className="christieagatha-books">
        <h2>
          <span className="accent-books" id="christieagatha">
            O
          </span>
          ther
        </h2>
        <section className="book-nav-button-container">
          <button className="book-nav-button" onClick={handleOpenBookNav}>
            ▼ SHOW/HIDE BOOK SELECTOR ▼
          </button>
        </section>
        {openBookNav ? <OtherBookList /> : <p />}
        <Routes>
          <Route path="/" element={<UselessPrince />} />
          <Route path="/uselessprince" element={<UselessPrince />} />
        </Routes>
      </section>
    </>
  );
};

export default OtherBooks;
