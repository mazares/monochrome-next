import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <div className="header-primary-inner">
        <div className="header-search d-block d-lg-none container">
          <ul>
            <li>
              <Link href="/">
                <a title="Menu">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </Link>
            </li>

            <li>
              <form className="search-form">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  required
                ></input>

                <button type="submit" name="search" id="search" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </li>
          </ul>
        </div>

        <nav className="header-nav d-none d-lg-block container">
          <ul>
            <li>
              <Link href="/">
                <a title="New arrivals">New arrivals</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a title="Brands">Brands</a>
              </Link>
            </li>

            <li>
              <Link href="/catalog">
                <a title="Men's">Men&apos;s</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a title="Women's">Women&apos;s</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a title="Accessories">Accessories</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a title="Lookbook">Lookbook</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
