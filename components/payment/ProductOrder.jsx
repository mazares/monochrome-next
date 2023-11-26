import Link from 'next/link';

export default function ProductOrder() {
  return (
    <article className="product-order py-3">
      <div className="product-order-container mx-lg-5">
        <section className="product-order-image">
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

        <section className="product-order-qty">
          <span className="d-block d-md-none text-center">Qty:</span>

          <span className="d-block">1</span>
        </section>

        <section className="product-order-unit-price">
          <span className="d-block d-md-none text-center">Price:</span>

          <span className="d-block price">$425</span>
        </section>

        <section className="product-order-vat">
          <span className="d-block d-md-none text-center">Vat:</span>

          <span className="d-block price">$25</span>
        </section>

        <section className="product-order-shipping">
          <span className="d-block d-md-none text-center">Shipping:</span>

          <span className="d-block price">$15</span>
        </section>
      </div>
    </article>
  );
}
