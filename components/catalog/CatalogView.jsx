import ProductTile from '../catalog/ProductTile';

export default function CatalogView() {
  return (
    <>
      <section className="catalog-view my-3 my-lg-4 container">
        <header className="catalog-view-header">
          <h1>Recently View</h1>
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
