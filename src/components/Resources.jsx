import caWorksheet_Book8 from "/assets/Worksheet_Book8.pdf";

const Resources = () => {
  return (
    <>
      <section className="resources">
        <h1>
          <span className="accent-resources">R</span>ESOURCES
        </h1>

        <h2>
          <span className="accent-resources" id="christieagatha">
            C
          </span>
          hristie and Agatha's Detective Agency
        </h2>

        <p>
          Here are some free worksheets I made expanding on the people and
          topics in the Christie and Agatha's Detective Agency books.
          <p />
          Feel free to use them at home or in class!
        </p>

        <section className="resources-list">
          <ul>
            <li>
              <p>PREVIEW:</p>
              <object
                data={caWorksheet_Book8}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <iframe src={caWorksheet_Book8} width="100%" height="100%">
                  <p>Your browser does not support PDF viewing.</p>
                </iframe>
              </object>
              <section className="resources-download">
                <a href={caWorksheet_Book8} download>
                  <button className="resources-download-button">
                    DOWNLOAD
                  </button>
                </a>
              </section>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Resources;
