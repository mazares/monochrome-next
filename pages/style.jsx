import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import StyleForm from '../components/style/StyleForm';

export default function Style() {
  return (
    <div>
      <Head>
        <title>Style &amp; fit</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <StyleForm></StyleForm>
      </main>

      <Footer></Footer>
    </div>
  );
}
