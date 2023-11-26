import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import Help from '../components/Help';
import ConfirmOrder from '../components/payment/ConfirmOrder';

export default function Confirm() {
  return (
    <div>
      <Head>
        <title>Confirm order</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <ConfirmOrder></ConfirmOrder>

        <Help></Help>
      </main>

      <Footer></Footer>
    </div>
  );
}
