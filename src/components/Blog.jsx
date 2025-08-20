import { useState } from "react";
import { Link } from "react-router-dom";

import blogbannerpocketfulofbooks from "/assets/blog-banner-pocketfulofbooks.png";
import blogbannerworldbookday from "/assets/blog-banner-worldbookday.png";
import blogbannerbookseller from "/assets/blog-banner-bookseller.png";
import blogbannertokyosurvivalchannel from "/assets/blog-banner-tokyosurvivalchannel.png";
import blogbannerdolkphotocontest from "/assets/blog-banner-dolkphotocontest.png";

import blogbannerreviewboytobeatthegods from "/assets/blog-banner-reviewboytobeatthegods.png";
import blogbannerreviewdearsesames from "/assets/blog-banner-reviewdearsesame.png";

const Blog = () => {
  const [tags, setTags] = useState("all");
  const [tagList, setTagList] = useState(true);

  const handleTagList = () => {
    setTagList(!tagList);
  };

  return (
    <>
      <section className="blog">
        <h1>
          <span className="accent-blog">B</span>LOG
        </h1>

        <div className="blog-tag-list">
          <button onClick={handleTagList}>
            <h3>
              <span className="accent-blog">T</span>ags ⏷⏷
            </h3>
          </button>

          {tagList ? (
            <>
              <p>
                <span className="strong">Year: </span>
                <button onClick={() => setTags("all")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>all
                  </span>
                </button>{" "}
                <button onClick={() => setTags("2025")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>2025
                  </span>
                </button>{" "}
                <button onClick={() => setTags("2024")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>2024
                  </span>
                </button>{" "}
                <button onClick={() => setTags("2021")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>2021
                  </span>
                </button>{" "}
                <button onClick={() => setTags("2020")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>2020
                  </span>
                </button>
                <br />
                <span className="strong">Type: </span>{" "}
                <button onClick={() => setTags("all")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>all
                  </span>
                </button>{" "}
                <button onClick={() => setTags("article")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>article
                  </span>
                </button>{" "}
                <button onClick={() => setTags("feature")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>feature
                  </span>
                </button>{" "}
                <button onClick={() => setTags("interview")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>interview
                  </span>
                </button>{" "}
                <br />
                <span className="strong">Other: </span>{" "}
                <button onClick={() => setTags("all")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>all
                  </span>
                </button>{" "}
                <button onClick={() => setTags("on-site")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>on site
                  </span>
                </button>{" "}
                <button onClick={() => setTags("external")}>
                  <span className="blog-tags">
                    <span className="accent-blog">#</span>external
                  </span>
                </button>
              </p>
            </>
          ) : (
            <p />
          )}
        </div>

        <section className="blog-list">
          <ul>
            {tags === "all" ||
            tags === "2024" ||
            tags === "interview" ||
            tags === "external" ? (
              <>
                <li>
                  <div className="blog-title">
                    <span className="accent-blog">A</span> Pocketful of Books
                    interview
                  </div>
                  <div>
                    <img
                      src={blogbannerpocketfulofbooks}
                      className="blog-img"
                      alt="A Pocketful of Books interview"
                    />
                  </div>
                  <div className="blog-date"> July 2024</div>
                  <div className="blog-info">
                    Interview by A Pocketful of Books, who released a fantastic{" "}
                    <span className="blog-link">
                      <a
                        href="https://apocketfulofbooks.com/products/back-issue-mysteries-of-science"
                        target="_blank"
                      >
                        box set
                      </a>
                    </span>{" "}
                    of To Halt a Heist.
                  </div>
                  <div className="blog-see-more">
                    <span className="blog-link">
                      <a
                        href="https://apocketfulofbooks.com/blogs/news/author-interview-pip-murphy"
                        target="_blank"
                      >
                        SEE MORE
                      </a>
                    </span>
                    <br />
                  </div>
                  <div className="blog-tags-section">
                    <button onClick={() => setTags("2024")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>2024
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("external")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>external
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("interview")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>interview
                      </span>
                    </button>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}

            {tags === "all" ||
            tags === "2021" ||
            tags === "feature" ||
            tags === "external" ? (
              <>
                <li>
                  <div className="blog-title">
                    <span className="accent-blog">W</span>orld Book Day "Cosy
                    Read" feature
                  </div>
                  <div>
                    <img
                      src={blogbannerworldbookday}
                      className="blog-img"
                      alt="World Book Day Cosy Reads"
                    />
                  </div>
                  <div className="blog-date"> October 2021</div>
                  <div className="blog-info">
                    <span className="italics">A Discovery Disappears</span>{" "}
                    featured on World Book Day's list of reading recommendations
                    as a "Cosy Read".
                  </div>
                  <div className="blog-see-more">
                    <span className="blog-link">
                      <a
                        href="https://www.worldbookday.com/reading-recommendations/cosy-reads/"
                        target="_blank"
                      >
                        SEE MORE
                      </a>
                    </span>
                    <br />
                  </div>
                  <div className="blog-tags-section">
                    <button onClick={() => setTags("2021")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>2021
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("external")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>external
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("feature")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>feature
                      </span>
                    </button>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}

            {tags === "all" ||
            tags === "2021" ||
            tags === "article" ||
            tags === "external" ? (
              <>
                <li>
                  <div className="blog-title">
                    <span className="accent-blog">T</span>he Bookseller
                    acquisition article
                  </div>
                  <div>
                    <img
                      src={blogbannerbookseller}
                      className="blog-img"
                      alt="The Bookseller Christie and Agatha's Detective Agency article"
                    />
                  </div>
                  <div className="blog-date"> March 2021</div>
                  <div className="blog-info">
                    The Bookseller: "Sweet Cherry acquires Pip Murphy detective
                    series" article by Ruth Comerford.
                  </div>
                  <div className="blog-see-more">
                    <span className="blog-link">
                      <a
                        href="https://www.thebookseller.com/news/sweet-cherry-acquires-pip-murphys-detective-series-1250171"
                        target="_blank"
                      >
                        SEE MORE
                      </a>
                    </span>
                    <br />
                  </div>
                  <div className="blog-tags-section">
                    <button onClick={() => setTags("2021")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>2021
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("external")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>external
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("article")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>article
                      </span>
                    </button>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}

            {tags === "all" ||
            tags === "2020" ||
            tags === "article" ||
            tags === "external" ? (
              <>
                <li>
                  <div className="blog-title">
                    <span className="accent-blog">I</span>llustration on Tokyo
                    Survival Channel
                  </div>
                  <div>
                    <img
                      src={blogbannertokyosurvivalchannel}
                      className="blog-img"
                      alt="Tokyo Survival Channel illustration"
                    />
                  </div>
                  <div className="blog-date"> October 2020</div>
                  <div className="blog-info">
                    My illustration of an amabie was featured (under the name
                    Santashi Finn) in an article by Zoria Petkoska.
                  </div>
                  <div className="blog-see-more">
                    <span className="blog-link">
                      <a
                        href="https://www.woshiru.com/tokyo/tokyo-experience/amabie-challenge-tsc-trying-to-make-the-antiviral-legend-go-viral-in-2020/"
                        target="_blank"
                      >
                        SEE MORE
                      </a>
                    </span>
                    <br />
                  </div>
                  <div className="blog-tags-section">
                    <button onClick={() => setTags("2020")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>2020
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("external")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>external
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("article")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>article
                      </span>
                    </button>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}

            {tags === "all" ||
            tags === "2020" ||
            tags === "feature" ||
            tags === "external" ? (
              <>
                <li>
                  <div className="blog-title">
                    <span className="accent-blog">W</span>on silver in 8th DOLK
                    photo contest
                  </div>
                  <div>
                    <img
                      src={blogbannerdolkphotocontest}
                      className="blog-img"
                      alt="DOLK photo contest second place photo of a Black Box Mochi in a sakura tree"
                    />
                  </div>
                  <div className="blog-date"> Spring 2020</div>
                  <div className="blog-info">
                    Came 2nd (silver award) in the 8th DOLK Photo Contest with
                    my photo of Tenka (a Black Box Mochi) in a sakura tree.
                  </div>
                  <div className="blog-see-more">
                    <span className="blog-link">
                      <a
                        href="https://dolk.jp/pages/photocon/8th/result.php"
                        target="_blank"
                      >
                        SEE MORE
                      </a>
                    </span>
                    <br />
                  </div>
                  <div className="blog-tags-section">
                    <button onClick={() => setTags("2020")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>2020
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("external")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>external
                      </span>
                    </button>{" "}
                    <button onClick={() => setTags("feature")}>
                      <span className="blog-tags">
                        <span className="accent-blog">#</span>feature
                      </span>
                    </button>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Blog;
