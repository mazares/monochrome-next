import Link from 'next/link';

export default function BannerMain() {
  return (
    <section className="banner-main d-block d-lg-none">
      <div className="banner-main-inner container">
        <Link href="/">
          <a className="banner-button" title="New in">
            New in
          </a>
        </Link>
      </div>
    </section>
  );
}
