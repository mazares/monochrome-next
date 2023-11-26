import ProductBag from './ProductBag';
import Link from 'next/link';

export default function Bag() {
  return (
    <section className="bag container mt-4 mt-lg-5">
      <header className="bag-header">
        <h1>Shopping bag</h1>

        <span>
          Items in the shopping bag are not reserved until completing the
          purchase.
        </span>
      </header>

      <section className="bag-products">
        <section className="details">
          <ul className="bag-products-details mx-lg-5">
            <li>Item</li>
            <li>Description</li>
            <li>Color</li>
            <li>Quantity</li>
            <li>Unity price</li>
          </ul>
        </section>

        <section className="bag-products-order">
          <ProductBag></ProductBag>

          <ProductBag></ProductBag>

          <ProductBag></ProductBag>
        </section>
      </section>

      <section className="bag-footer my-5 mx-lg-5">
        <section className="bag-totals">
          <section className="subtotal">
            <h1>Subtotal</h1>

            <span>$1.275</span>
          </section>

          <section className="shipping">
            <h1>Shipping</h1>

            <span>*Free</span>
          </section>

          <section className="taxes">
            <h1>Taxes</h1>

            <span>$0</span>
          </section>

          <section className="total">
            <h1>Total</h1>

            <span className="total-price">$1.275</span>
          </section>
        </section>

        <Link href="/order-sign-in">
          <a title="Buy now" className="bag-button">
            <i className="fa-solid fa-wallet"></i>
            Buy Now
          </a>
        </Link>
      </section>
    </section>
  );
}
