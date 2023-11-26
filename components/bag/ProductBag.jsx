import Link from 'next/link';

export default function ProductBag() {
  return (
    <article className="product-bag pt-3">
      <div className="product-bag-container mx-lg-5">
        <section className="product-image">
          <Link href="/product">
            <a>
              <img
                src="/images/image1.png"
                alt="Monochrome Watch"
                title="Monochrome Watch"
              ></img>
            </a>
          </Link>
        </section>

        <section className="product-description">
          <span>Monochrome</span>

          <p className="d-none d-lg-block px-3">
            Max Bill Chronoscope 40mm Stainless Steel and Leather Watch
          </p>
        </section>

        <section className="product-color ">
          <span className="color">Black</span>
        </section>

        <section className="product-qty">
          <form>
            <button
              type="button"
              className="button-small"
              name="substract-qty"
              id="substract-qty"
            >
              <i className="fa-solid fa-minus"></i>
            </button>

            <input
              type="number"
              id="product-bag-qty"
              name="product-bag-qty"
              min="1"
              max="10"
              defaultValue="1"
            ></input>

            <button
              type="button"
              className="button-small"
              name="add-qty"
              id="add-qty"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </form>
        </section>

        <section className="product-price">
          <span className="price">$425</span>
        </section>

        <section className="product-controls pt-4 pb-3 ps-5">
          <button
            type="submit"
            name="move-whish"
            id="move-whish"
            className="button-small me-2"
            title="Move to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </button>

          <button
            type="reset"
            name="move-whish"
            id="move-whish"
            className="button-small"
            title="Remove product"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </section>
      </div>
    </article>
  );
}
