import { Route, Routes } from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import Blog from "./Blog";
import Books from "./Books";
import About from "./About";

import Footer from "./Footer";
import Projects from "./Projects";
import Works from "./Works";
import Support from "./Support";
import ChristieAgathaBooks from "./ChristieAgathaBooks";
import ChristieAgathaBook1 from "./ChristieAgathaBook1";
import ChristieAgathaBook1Point5 from "./ChristieAgathaBook1Point5";
import ChristieAgathaBook2 from "./ChristieAgathaBook2";
import ChristieAgathaBook3 from "./ChristieAgathaBook3";
import ChristieAgathaBook4 from "./ChristieAgathaBook4";
import ChristieAgathaBook5 from "./ChristieAgathaBook5";
import ChristieAgathaBook6 from "./ChristieAgathaBook6";
import ChristieAgathaBook7 from "./ChristieAgathaBook7";
import AwtletBooks from "./AwtletBooks";

import pipheader_01 from "/assets/pipheader_01.png";
import AwtletBook1 from "./AwtletBook1";
import AwtletBook4 from "./AwtletBook4";
import AwtletBook3 from "./AwtletBook3";
import AwtletBook2 from "./AwtletBook2";
import OtherBooks from "./OtherBooks";
import UselessPrince from "./UselessPrince";
import ShortStoryTheDoppelganger from "./ShortStoryTheDoppelganger";
import ProjectSixthEntryOld from "./ProjectSixthEntryOld";

const App = () => {
  return (
    <>
      <section className="apple-watch">
        <img src={pipheader_01} alt="Pip Murphy" />
        <p>Please view on a device with a larger screen!</p>
      </section>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/books" element={<Books />} />
          <Route path="/christieandagatha" element={<ChristieAgathaBooks />}>
            <Route
              path="/christieandagatha/book1/"
              element={<ChristieAgathaBook1 />}
            />
            <Route
              path="/christieandagatha/book1point5"
              element={<ChristieAgathaBook1Point5 />}
            ></Route>
            <Route
              path="/christieandagatha/book2"
              element={<ChristieAgathaBook2 />}
            />
            <Route
              path="/christieandagatha/book3"
              element={<ChristieAgathaBook3 />}
            />
            <Route
              path="/christieandagatha/book4"
              element={<ChristieAgathaBook4 />}
            />
            <Route
              path="/christieandagatha/book5"
              element={<ChristieAgathaBook5 />}
            />
            <Route
              path="/christieandagatha/book6"
              element={<ChristieAgathaBook6 />}
            />
            <Route
              path="/christieandagatha/book7"
              element={<ChristieAgathaBook7 />}
            />
          </Route>

          <Route path="/awtlet-comics" element={<AwtletBooks />}>
            <Route path="/awtlet-comics/book1" element={<AwtletBook1 />} />
            <Route path="/awtlet-comics/book2" element={<AwtletBook2 />} />
            <Route path="/awtlet-comics/book3" element={<AwtletBook3 />} />
            <Route path="/awtlet-comics/book4" element={<AwtletBook4 />} />
          </Route>

          <Route path="/otherbooks" element={<OtherBooks />}>
            <Route
              path="/otherbooks/uselessprince"
              element={<UselessPrince />}
            />
          </Route>

          <Route path="/projects" element={<Projects />} />

          <Route
            path="/projects/sixthentryold"
            element={<ProjectSixthEntryOld />}
          />

          <Route path="/works" element={<Works />} />

          <Route
            path="/thedoppelganger"
            element={<ShortStoryTheDoppelganger />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
