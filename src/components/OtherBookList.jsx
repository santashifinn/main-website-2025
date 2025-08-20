import { Link } from "react-router-dom";

import uselessprince_0 from "/assets/uselessprincecover.jpg";

const OtherBookList = () => {
  return (
    <>
      <section className="books-list">
        <section className="books-covers">
          <Link to="/otherbooks/uselessprince">
            <img
              src={uselessprince_0}
              className="books-covers-img-smol"
              alt="The Girl Who Looks Like a Prince but is not Dependable At All"
            />
          </Link>{" "}
        </section>
      </section>
    </>
  );
};

export default OtherBookList;
