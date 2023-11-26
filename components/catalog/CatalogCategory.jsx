import Link from 'next/link';

export default function CatalogCategory() {
  return (
    <section className="catalog-category mt-4 mt-lg-5">
      <div className="catalog-category-inner container">
        <header className="catalog-category-header mb-3">
          <h1 className="mb-2">Men&apos;s</h1>

          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account.
          </p>
        </header>

        <section className="catalog-category-controls">
          <section className="filter-s d-block d-lg-none">
            <ul>
              <li>
                <Link href="/catalog">
                  <a title="Sort">
                    <i className="fa-solid fa-sort pe-2"></i>
                    Sort
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/catalog">
                  <a title="Filter">
                    <i className="fa-solid fa-arrow-down-short-wide pe-2"></i>
                    Filter
                  </a>
                </Link>
              </li>
            </ul>
          </section>

          <section className="filter-lg d-none d-lg-block">
            <ul>
              <li>
                <button title="Bestsellers" className="filter-button">
                  Bestsellers
                </button>
              </li>

              <li>
                <button title="$ High to Low" className="filter-button">
                  $ High to Low
                </button>
              </li>

              <li>
                <button title="$ Low to High" className="filter-button">
                  $ Low to High
                </button>
              </li>

              <li>
                <button title="New in" className="filter-button">
                  New in
                </button>
              </li>

              <li>
                <button title="White" className="filter-button">
                  White
                </button>
              </li>

              <li>
                <button title="Black" className="filter-button">
                  Black
                </button>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
}
