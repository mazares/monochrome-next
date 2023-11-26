import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import Help from '../components/Help';
import ShippingOrder from '../components/payment/ShippingOrder';

export default function Shipping() {
  return (
    <div>
      <Head>
        <title>Shipping</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <ShippingOrder></ShippingOrder>

        <Help></Help>
      </main>

      <Footer></Footer>
    </div>
  );
}
