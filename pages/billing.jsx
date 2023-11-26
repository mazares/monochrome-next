import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import Help from '../components/Help';
import BillingOrder from '../components/payment/BillingOrder';

export default function Billing() {
  return (
    <div>
      <Head>
        <title>Billing</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <BillingOrder></BillingOrder>

        <Help></Help>
      </main>

      <Footer></Footer>
    </div>
  );
}
