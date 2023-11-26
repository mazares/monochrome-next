import Link from 'next/link';

export default function CatalogProduct() {
  return (
    <section className="catalog-product mt-4 mt-lg-5">
      <div className="catalog-product-inner container">
        <section className="product-presentation">
          <div className="product-gallery-outer mb-lg-5">
            <div className="product-gallery-outer-container">
              <img src="/images/product.png" alt="Watch" title="Watch"></img>
            </div>
          </div>

          <div className="product-gallery">
            <ul>
              <li>
                <Link href="/product">
                  <a>
                    <img
                      src="images/image1.png"
                      alt="Watch"
                      title="Watch"
                    ></img>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/product">
                  <a>
                    <img
                      src="images/image1.png"
                      alt="Watch"
                      title="Watch"
                    ></img>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/product">
                  <a>
                    <img
                      src="images/image1.png"
                      alt="Watch"
                      title="Watch"
                    ></img>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/product">
                  <a>
                    <img
                      src="images/image1.png"
                      alt="Watch"
                      title="Watch"
                    ></img>
                  </a>
                </Link>
              </li>
            </ul>

            <Link href="/product">
              <a>
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </Link>

            <Link href="/product">
              <a>
                <i className="fa-solid fa-angle-left"></i>
              </a>
            </Link>
          </div>
        </section>

        <section className="product-details">
          <header className="product-details-header">
            <h1>Monochrome Max Bill - $725</h1>
          </header>

          <section className="product-details-view">
            <section className="product-description">
              <header className="product-description-header">
                <h1>
                  <Link href="/product">
                    <a title="Description">
                      Description
                      <i className="fa-solid fa-minus"></i>
                    </a>
                  </Link>
                </h1>
              </header>

              <p>
                Mr Max Bill was a true creative genius, carving out a career as
                a painter, architect, sculptor and designer. As well as leaving
                behind an expansive body of work, he was also an avid collector
                of watches, and this Junghans chronoscope timepiece is dedicated
                to his memory. Immaculately housed in a domed Plexiglass case
                and finished with a handsome leather strap, it&apos;s a highly
                technical piece in a stylish package.
              </p>
            </section>

            <section className="product-fit">
              <header className="product-fit-header">
                <h1>
                  <Link href="/product">
                    <a title="Size &amp; fit">
                      Size &amp; fit
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </Link>
                </h1>
              </header>

              <p className="d-none">
                Mr Max Bill was a true creative genius, carving out a career as
                a painter, architect, sculptor and designer.
              </p>
            </section>

            <section className="product-care">
              <header className="product-care-header">
                <h1>
                  <Link href="/product">
                    <a title="Details &amp; care">
                      Details &amp; care
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </Link>
                </h1>
              </header>

              <p className="d-none">
                Mr Max Bill was a true creative genius, carving out a career as
                a painter, architect, sculptor and designer.
              </p>
            </section>

            <section className="product-trasportation">
              <header className="product-trasportation-header">
                <h1>
                  <Link href="/product">
                    <a title="Delivery &amp; returns">
                      Delivery &amp; returns
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </Link>
                </h1>
              </header>

              <p className="d-none">
                Mr Max Bill was a true creative genius, carving out a career as
                a painter, architect, sculptor and designer.
              </p>
            </section>
          </section>

          <section className="product-cta">
            <button
              type="submit"
              name="add-to-bag"
              id="add-to-bag"
              className="bag-button"
              title="Add to bag"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              Add to bag
            </button>

            <button
              type="submit"
              name="whish"
              id="whish"
              className="whish-button"
              title="Whislist"
            >
              <i className="fa-solid fa-heart"></i>
              Whishlist
            </button>
          </section>

          <footer className="product-details-footer mt-4">
            <section className="shipping">
              <Link href="/product">
                <a title="Shipping Restrictions May Apply">
                  Shipping Restrictions May Apply
                </a>
              </Link>
            </section>

            <section className="product-details-connect">
              <ul>
                <li>
                  <Link href="mailto:monochrome@office.com">
                    <a title="Mail">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://twitter.com">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome Twitter account"
                    >
                      <i className="fa-brands fa-twitter-square"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://facebook.com">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome Facebook account"
                    >
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://pinterest.com">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome pinterest account"
                    >
                      <i className="fa-brands fa-pinterest-square"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://tumblr.com">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Monochrome tumblr account"
                    >
                      <i className="fa-brands fa-tumblr-square"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </section>

            <section className="help">
              <ul>
                <li>Product Code: 668235</li>

                <li>
                  Send us
                  <Link href="/product">
                    <a title="Send us Custom Inquiry" className="d-block">
                      Custom Inquiry
                    </a>
                  </Link>
                </li>

                <li>
                  Contact us
                  <Link href="/product">
                    <a title=" Customer Service" className="d-block">
                      Customer Service
                    </a>
                  </Link>
                </li>
              </ul>
            </section>
          </footer>
        </section>
      </div>
    </section>
  );
}
