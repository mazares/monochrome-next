import Head from 'next/head';
import Bag from '../components/bag/Bag';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import Help from '../components/Help';
import CatalogView from '../components/catalog/CatalogView';

export default function ShoppingBag() {
  return (
    <div>
      <Head>
        <title>Shopping Bag</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <Bag></Bag>

        <Help></Help>

        <CatalogView></CatalogView>
      </main>

      <Footer></Footer>
    </div>
  );
}
