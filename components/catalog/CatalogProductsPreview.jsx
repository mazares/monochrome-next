import ProductTile from './ProductTile';
import Link from 'next/link';

export default function CatalogProductsPreview() {
  return (
    <>
      <section className="catalog-products-preview container">
        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <footer className="catalog-products-preview-cta mt-5">
          <Link href="/catalog">
            <a title="Load more" className="button">
              Load more
            </a>
          </Link>
        </footer>
      </section>
    </>
  );
}
