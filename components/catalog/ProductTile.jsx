import Link from 'next/link';

export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <Link href="/product">
            <a title="Machine black watch">
              <div className="image-container">
                <img src="/images/image1.png" alt="Machine black watch"></img>
              </div>
            </a>
          </Link>
        </div>

        <Link href="/">
          <a title="Wishlist">
            <i className="fa-solid fa-shield-heart"></i>
          </a>
        </Link>

        <div>
          <h1 className="product-tile-title">
            <Link href="/product">
              <a title="Monochrome">Monochrome</a>
            </Link>
          </h1>
        </div>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price">$425</span>
      </section>

      <footer className="product-tile-footer">
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
      </footer>
    </article>
  );
}
