import ProductOrder from './ProductOrder';

export default function ProductsOrderPreview() {
  return (
    <section className="products-order-preview">
      <section className="products-order-details">
        <ul className="mx-lg-5">
          <li>Item</li>
          <li>Quantity</li>
          <li>Unit price</li>
          <li>VAT</li>
          <li>Shipping</li>
        </ul>
      </section>

      <ProductOrder></ProductOrder>

      <ProductOrder></ProductOrder>

      <ProductOrder></ProductOrder>

      <footer className="products-order-total py-3 mx-lg-5">
        <h1>Total</h1>

        <span>$1.275$</span>
      </footer>
    </section>
  );
}
