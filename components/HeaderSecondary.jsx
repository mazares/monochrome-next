import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-secondary-inner container">
        <section className="header-connect d-none d-lg-block">
          <ul>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Youtube channel"
              >
                <i className="fa-brands fa-youtube-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Twitter account"
              >
                <i className="fa-brands fa-twitter-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Facebook account"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Instagram account"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>

            <li>
              <a href="tel:+4401023456789" title="Call us">
                Call us: +44 010 2345 6789
              </a>
            </li>
          </ul>
        </section>

        <section className="header-controls">
          <header className="d-block d-lg-none">
            <h1 className="header-title">Monochrome</h1>
          </header>

          <form className="header-search d-none d-lg-block">
            <input
              type="text"
              name="search-home"
              id="search-home"
              placeholder="Search"
              required
            ></input>

            <button
              type="submit"
              name="btn-search-home"
              id="btn-search-home"
              title="Search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <ul className="user-controls">
            <li>
              <Link href="/" title="User account">
                <a title="User account">
                  <i className="fa-solid fa-user"></i>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/" title="Wishlist">
                <a title="Whishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/shopping-bag">
                <a title="Shopping bag">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
