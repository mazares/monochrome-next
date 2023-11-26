import ProductTile from '../catalog/ProductTile';

export default function CatalogLike() {
  return (
    <>
      <section className="catalog-like my-3 my-lg-4 container">
        <header className="catalog-like-header">
          <h1>You May Also Like</h1>
        </header>

        <section className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </section>
      </section>
    </>
  );
}
