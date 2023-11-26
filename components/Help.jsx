import Link from 'next/link';

export default function Help() {
  return (
    <section className="help-customer container py-5">
      <ul>
        <li>
          <span>Need help?</span>
        </li>

        <li>
          <Link href="tel:+4401023456789">
            <a title="Call us">Call us: +44 010 2345 6789</a>
          </Link>
        </li>

        <li>
          <Link href="mailto:office.monochrome.com">
            <a title="Email customer care">Email customer care</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a title="Shipping information">Shipping information</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a title="Returns &amp; exchanges">Returns &amp; exchanges</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
