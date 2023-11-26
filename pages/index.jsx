import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BannerMain from '../components/homepage/BannerMain';
import BrandMarketing from '../components/homepage/BrandMarketing';
import CatalogPreview from '../components/homepage/CatalogPreview';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <Header></Header>

      <main className="content">
        <BannerMain></BannerMain>

        <CatalogPreview></CatalogPreview>

        <CatalogPreview></CatalogPreview>

        <BrandMarketing></BrandMarketing>

        <CatalogPreview></CatalogPreview>

        <CatalogPreview></CatalogPreview>
      </main>

      <Footer></Footer>
    </div>
  );
}
