import PaymentBar from './PaymentBar';
import Link from 'next/link';
import ProductsOrderPreview from './ProductsOrderPreview';

export default function ConfirmOrder() {
  return (
    <section className="confirm-order container mt-4 mt-lg-5 pb-5">
      <header className="confirm-order-header">
        <h1>Confirm order</h1>
      </header>

      <section className="payment-bar">
        <PaymentBar></PaymentBar>
      </section>

      <section className="confirm-order-details">
        <header className="confirm-order-details-header">
          <h1>Thank you for your order!</h1>

          <p>
            You order has been registered and our colleagues are preparing your
            awesome watch. It will take 2-3 days until your&apos;ll have it
            ready for your wrist.
          </p>
        </header>

        <section className="order-products-preview">
          <h2>Order confirmation</h2>

          <div className="order-products-preview-container">
            <ProductsOrderPreview></ProductsOrderPreview>
          </div>

          <div>
            <Link href="/">
              <a title="Print your invoice">Print your invoice</a>
            </Link>
          </div>
        </section>

        <div className="payment-shipping">
          <section className="confirm-payment">
            <header className="confirm-payment-header">
              <h1>Payment confirmation</h1>
            </header>

            <span>Credit card number XXXX XXXX XXXX 0046</span>
          </section>

          <section className="confirm-shipping">
            <header className="confirm-shipping-header">
              <h1>Shipping</h1>
            </header>

            <span>Your will receive your order in 2-3 business days</span>

            <button
              type="button"
              name="track-order"
              id="track-order"
              className="button"
              title="Track order"
            >
              Track order
            </button>
          </section>
        </div>
      </section>
    </section>
  );
}
