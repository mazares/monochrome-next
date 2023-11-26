import ProductTile from '../catalog/ProductTile';
import Link from 'next/link';

export default function CatalogPreview() {
  return (
    <>
      <section className="catalog-preview my-3 my-lg-4 container">
        <header className="catalog-preview-header">
          <h1>New Stuff</h1>
        </header>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>

        <footer className="catalog-preview-ctas mt-5">
          <Link href="/catalog">
            <a title="View all" className="button">
              View all
            </a>
          </Link>
        </footer>
      </section>
    </>
  );
}
