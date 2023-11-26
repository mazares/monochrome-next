import PaymentBar from './PaymentBar';
import ProductsOrderPreview from './ProductsOrderPreview';
import Link from 'next/link';

export default function BillingOrder() {
  return (
    <section className="billing-order container mt-4 mt-lg-5 pb-5">
      <header className="billing-order-header">
        <h1>Billing</h1>
      </header>

      <section className="payment-bar">
        <PaymentBar></PaymentBar>
      </section>

      <section className="billing-order-details">
        <section className="billing-order-summary">
          <header className="billing-order-summary-header">
            <h1>1. Your order summary</h1>
          </header>

          <section className="products-summary">
            <ProductsOrderPreview></ProductsOrderPreview>
          </section>
        </section>

        <section className="shipping-billing-address">
          <header className="shipping-billing-address-header">
            <h1>2. Review shipping and billing address</h1>
          </header>

          <div className="addresses-container">
            <section className="shipping-address">
              <header className="shipping-address-header">
                <h2>Shipping address</h2>
              </header>

              <section className="shipping-address-details">
                <span>Mr. Kill Bill</span>
                <span>1234</span>
                <span>Couckoo Boulevard</span>
                <span>Quarantine Zone</span>
                <span>47862</span>
                <span>Happy Country</span>

                <Link href="/billing">
                  <a title="Change shipping address">Change shipping address</a>
                </Link>
              </section>
            </section>

            <section className="billing-address">
              <header className="billing-address-header">
                <h2>Billing address</h2>
              </header>

              <section className="billing-address-details">
                <span>Same as shipping address</span>

                <Link href="/billing">
                  <a title="Change billing address">Change billing address</a>
                </Link>
              </section>
            </section>
          </div>
        </section>

        <section className="delivery-order">
          <header className="delivery-order-header">
            <h1>3. Delivery Method</h1>
          </header>

          <div className="methods-container">
            <section className="express-delivery">
              <header className="express-delivery-header">
                <h2>Express Delivery($Free)</h2>
              </header>

              <section className="espress-delivery-details">
                <span>Delivered in 3-4 business days</span>

                <Link href="/billing">
                  <a title="Change shipping address">Change shipping address</a>
                </Link>
              </section>
            </section>

            <section className="packaging">
              <header className="packaging-header">
                <h2>Packaging options</h2>
              </header>

              <section className="packaging-details">
                <span>Same as shipping address</span>

                <Link href="/billing">
                  <a title="Change billing address">Change billing address</a>
                </Link>
              </section>
            </section>
          </div>
        </section>

        <section className="payment-order">
          <header className="payment-order-header">
            <h1>4. Payment methods</h1>
          </header>

          <section className="payment-order-methods">
            <form>
              <fieldset>
                <div className="pay-methods">
                  <div>
                    <input
                      type="radio"
                      name="methods"
                      id="card"
                      value="card"
                      className="me-2"
                      required
                    ></input>
                    <label htmlFor="card">
                      <i className="fa-solid fa-credit-card"></i>
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="methods"
                      id="paypal"
                      value="paypal"
                      className="me-2"
                      required
                    ></input>
                    <label htmlFor="paypal">
                      <i className="fa-brands fa-paypal"></i>
                    </label>
                  </div>
                </div>

                <label htmlFor="card-name">*Name on card:</label>
                <input
                  type="text"
                  name="card-name"
                  id="card-name"
                  placeholder="Name on card"
                  className="input"
                  required
                ></input>

                <label htmlFor="card-number">*Card Number:</label>
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  placeholder="Card Number"
                  className="input"
                  required
                ></input>

                <div className="card-info">
                  <label className="d-block">*Expiration date:</label>

                  <div className="card-info-container">
                    <select
                      name="card-expiration-month"
                      id="card-expiration-month"
                      className="me-lg-2 select-month"
                      required
                    >
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>

                    <select
                      name="card-expiration-year"
                      id="card-expiration-year"
                      className="me-lg-2 select-year"
                      required
                    >
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </select>

                    <input
                      type="text"
                      name="card-cvv"
                      id="card-cvv"
                      placeholder="CVV"
                      className="input"
                      required
                    ></input>
                  </div>
                </div>

                <div className="secure-pay py-3">
                  <input
                    type="checkbox"
                    name="store-payment"
                    id="store-payment"
                  ></input>
                  <label htmlFor="store-payment">
                    Securely store payment for next purchase.
                  </label>
                </div>

                <div className="order-place py-3">
                  <button
                    type="submit"
                    name="place-order"
                    id="place-order"
                    className="dark-button"
                    title="Finish purchase"
                  >
                    Finish purchase
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
}
