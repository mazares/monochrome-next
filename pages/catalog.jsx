import Head from 'next/head';
import CatalogCategory from '../components/catalog/CatalogCategory';
import CatalogProductsPreview from '../components/catalog/CatalogProductsPreview';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';

export default function Catalog() {
  return (
    <div>
      <Head>
        <title>Men&apos;s</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <CatalogCategory></CatalogCategory>

        <CatalogProductsPreview></CatalogProductsPreview>
      </main>

      <Footer></Footer>
    </div>
  );
}
