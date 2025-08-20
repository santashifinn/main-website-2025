import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <section className="works">
        <h1>
          <span className="accent-works">W</span>ORKS
        </h1>
        <h3>
          <span className="accent-works">P</span>ublications
        </h3>

        <section className="publications">
          <ul>
            <li>
              <div className="publication-type-short-story">SHORT STORY</div>
              <div className="publication-title">Bathhouse</div>
              <div className="publication-date">March 2025</div>
              <div className="publication-publisher">
                Printed in{" "}
                <span className="publication-link">
                  <a
                    href="https://lostin.com/products/lost-in-tokyo"
                    target="_blank"
                  >
                    LOST iN Tokyo
                  </a>
                </span>{" "}
                (2nd ed.), published by{" "}
                <span className="publication-link">
                  <a href="https://lostin.com" target="_blank">
                    LOST iN
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-short-story">SHORT STORY</div>
              <div className="publication-title">The Doppelganger</div>
              <div className="publication-date">October 2024</div>
              <div className="publication-publisher">
                Self published,{" "}
                <span className="publication-link">
                  <Link to="/thedoppelganger">online</Link>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 7: The Composer
                Crisis
              </div>
              <div className="publication-date">July 2024</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 6: To Halt a Heist
              </div>
              <div className="publication-date">February 2024</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-comic">COMIC</div>
              <div className="publication-title">
                MYSTERIFUL DESPAIR
              </div>
              <div className="publication-date">December 2023</div>
              <div className="publication-publisher">Self published</div>
            </li>

            <li>
              <div className="publication-type-comic">COMIC</div>
              <div className="publication-title">
                Assassins Want to Learn English, Too! - Lesson 4
              </div>
              <div className="publication-date">September 2023</div>
              <div className="publication-publisher">Self published</div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 5: Genius on the
                Green Express
              </div>
              <div className="publication-date">September 2023</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-comic">COMIC</div>
              <div className="publication-title">
                The Girl Who Looks Like a Prince but is not Dependable At All
              </div>
              <div className="publication-date">May 2023</div>
              <div className="publication-publisher">Self published</div>
            </li>

            <li>
              <div className="publication-type-comic">COMIC</div>
              <div className="publication-title">
                Assassins Want to Learn English, Too! - Lesson 3
              </div>
              <div className="publication-date">February 2023</div>
              <div className="publication-publisher">Self published</div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 4: Ransom on the
                Riviera
              </div>
              <div className="publication-date">February 2023</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-comic">COMIC</div>
              <div className="publication-title">
                Assassins Want to Learn English, Too! - Lesson 2
              </div>
              <div className="publication-date">November 2022</div>
              <div className="publication-publisher">Self published</div>
            </li>

            <li>
              <div className="publication-type-comic">COMIC</div>
              <div className="publication-title">
                Assassins Want to Learn English, Too! - Lesson 1
              </div>
              <div className="publication-date">September 2022</div>
              <div className="publication-publisher">Self published</div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 3: Tombful of
                Trouble
              </div>
              <div className="publication-date">September 2022</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 2: Of Mountains and
                Motors
              </div>
              <div className="publication-date">February 2022</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>

            <li>
              <div className="publication-type-short-story">SHORT STORY</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 1.5: Christmas in
                Torquay
              </div>
              <div className="publication-date">December 2021</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
                *
                <br />
                *Online only, free
              </div>
            </li>

            <li>
              <div className="publication-type-mg-novel">MG NOVEL</div>
              <div className="publication-title">
                Christie and Agatha's Detective Agency Book 1: A Discovery
                Disappears
              </div>
              <div className="publication-date">September 2021</div>
              <div className="publication-publisher">
                Published by{" "}
                <span className="publication-link">
                  <a href="https://sweetcherrypublishing.com" target="_blank">
                    Sweet Cherry Publishing
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Works;
