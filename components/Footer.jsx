import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner mt-5 container">
        <section className="footer-connect my-5 py-5 py-lg-1">
          <div className="footer-connect-inner">
            <form className="footer-newsletter">
              <header className="footer-newsletter-header d-block d-lg-none">
                <h1 className="mb-3">Let&apos;s connect!</h1>

                <p>Be the first to receive exclusives offers</p>
              </header>

              <div className="newsletter">
                <label htmlFor="email">Sign up for our newsletter</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  required
                ></input>
              </div>

              <div className="terms">
                <input type="checkbox" name="terms" id="terms" required></input>

                <label
                  htmlFor="terms"
                  title="I agree with Privacy Policy and i want to receive emails from Monochrome"
                >
                  I agree with
                  <Link href="/">
                    <a
                      title="Privacy Policy"
                      className="text-decoration-underline mx-1"
                    >
                      Privacy Policy
                    </a>
                  </Link>
                  and i want to receive emails from Monochrome
                </label>
              </div>

              <button
                type="submit"
                name="submit"
                id="submit"
                title="Sign up for our newsletter"
                className="button-small"
              >
                Submit
              </button>
            </form>

            <section className="footer-social">
              <header className="footer-social-header d-black d-lg-none">
                <h1>We are highly likeable</h1>
              </header>

              <ul>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Monochrome Youtube channel"
                  >
                    <i className="fa-brands fa-youtube-square"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Monochrome Twitter account"
                  >
                    <i className="fa-brands fa-twitter-square"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Monochrome Facebook account"
                  >
                    <i className="fa-brands fa-facebook-square"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Monochrome Instagram account"
                  >
                    <i className="fa-brands fa-instagram-square"></i>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section className="footer-nav my-5 py-5 py-lg-1">
          <div className="footer-nav-inner">
            <header className="footer-nav-header d-block d-lg-none">
              <h1> How can we help?</h1>
            </header>

            <div className="nav">
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a title="About us">About us</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a title="Careers">Careers</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a title="Affiliates">Affiliates</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a title="Advertising">Advertising</a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav>
                <ul>
                  <li>
                    <Link href="/style">
                      <a title="Style &amp; fit advice">
                        Style &amp; fit advice
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a title="Faqs">Faqs</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a title="Delivery">Delivery</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a title="Exchanges &amp; returns">
                        Exchanges &amp; returns
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="terms d-block d-lg-none">
              <ul>
                <li>
                  <Link href="/">
                    <a title="terms &amp; conditions">terms &amp; conditions</a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a title="privacy &amp; cookies">privacy &amp; cookies</a>
                  </Link>
                </li>
              </ul>
            </div>

            <section className="footer-contact d-none d-lg-block">
              <ul>
                <li>
                  <Link href="/">
                    <a href="tel:+4401023456789" title="Call us">
                      Call us
                      <span>+44 (0)10 2345 6789</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a
                      href="mailto:office@monochrome.com"
                      title="Email customer care"
                    >
                      Email customer care
                    </a>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </footer>
  );
}
