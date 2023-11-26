import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import SignInOrder from '../components/payment/SignInOrder';
import Help from '../components/Help';

export default function OrderSignIn() {
  return (
    <div>
      <Head>
        <title>Sign in</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <SignInOrder></SignInOrder>

        <Help></Help>
      </main>

      <Footer></Footer>
    </div>
  );
}
