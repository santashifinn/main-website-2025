import iconamazonwishlist from "/assets/icon-amazonwishlist.png";

const Support = () => {
  return (
    <>
      <section className="support">
        <h1>
          <span className="accent-support">S</span>UPPORT
        </h1>

        <p>
          If you'd like to support me you can do so in many ways. For example,
          by reviewing my books on Amazon, Goodreads, etc. - or simply by
          telling your friends and family about them. I really appreciate every
          kind thought and comment!
        </p>

        <p>
          I also have an Amazon wishlist of exciting items but the kind thoughts
          are wonderful enough already!
        </p>

        <a
          href="https://www.amazon.co.uk/hz/wishlist/ls/TEK1LWQFKO01?ref_=wl_share"
          target="_blank"
        >
          <img
            src={iconamazonwishlist}
            className="icon-amazonwishlist"
            alt="Pip's Amazon wishlist"
          />
        </a>
      </section>
    </>
  );
};

export default Support;
