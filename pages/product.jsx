import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import CatalogLike from '../components/catalog/CatalogLike';
import CatalogView from '../components/catalog/CatalogView';
import CatalogProduct from '../components/catalog/CatalogProduct';

export default function Product() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <CatalogProduct></CatalogProduct>

        <CatalogLike></CatalogLike>

        <CatalogView></CatalogView>
      </main>

      <Footer></Footer>
    </div>
  );
}
