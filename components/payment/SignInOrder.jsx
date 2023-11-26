import PaymentBar from './PaymentBar';
import Link from 'next/link';

export default function SignInOrder() {
  return (
    <section className="sign-in-order container mt-4 mt-lg-5 pb-5">
      <header className="sign-in-order-header">
        <h1>Sign in</h1>
      </header>

      <section className="payment-bar">
        <PaymentBar></PaymentBar>
      </section>

      <section className="account">
        <div className="account-inner mx-lg-5 pb-5">
          <section className="sign-in py-5">
            <header className="sign-in-header px-5">
              <h1 className="pb-3">Existing customer</h1>
            </header>

            <p className="px-lg-5">
              Make purchases faster using previously saved details. Track
              previous orders and easily request returns from the website.
            </p>

            <form>
              <fieldset>
                <input
                  type="email"
                  name="email-sign-in"
                  id="email-sign-in"
                  placeholder="Email address"
                  className="input"
                  required
                ></input>

                <input
                  type="password"
                  name="password-sign-in"
                  id="password-sign-in"
                  placeholder="Password"
                  className="input"
                  required
                ></input>

                <Link href="/sign-in-order">
                  <a title="Forgot password?">Forgot password?</a>
                </Link>

                <button
                  type="submit"
                  name="sign-in"
                  id="sign-in"
                  title="Sign in"
                  className="dark-button"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </section>

          <section className="register py-5">
            <header className="register-header px-5">
              <h1 className="pb-3">New customer</h1>
            </header>

            <form>
              <fieldset>
                <input
                  type="text"
                  name="name-register"
                  id="name-register"
                  placeholder="Full name"
                  className="input"
                  required
                ></input>

                <input
                  type="email"
                  name="email-register"
                  id="email-register"
                  placeholder="Email address"
                  className="input"
                  required
                ></input>

                <input
                  type="password"
                  name="password-register"
                  id="password-register"
                  placeholder="Password"
                  className="input"
                  required
                ></input>

                <input
                  type="password"
                  name="password-register-confirm"
                  id="password-register-confirm"
                  placeholder="Confirm password"
                  className="input"
                  required
                ></input>

                <div className="terms">
                  <input
                    type="radio"
                    name="register-terms"
                    id="register-terms"
                    placeholder="I agree with Terms and Conditions and GDPR Privacy Policy"
                    required
                  ></input>

                  <label htmlFor="register-terms">
                    I agree with
                    <Link href="/sign-in-order">
                      <a
                        title="Terms and Conditions"
                        className="d-inlineblock mx-1"
                      >
                        Terms and Conditions
                      </a>
                    </Link>
                    and
                    <Link href="/sign-in-order">
                      <a
                        title="GDPR Privacy Policy"
                        className="d-inlineblock mx-1"
                      >
                        GDPR Privacy Policy
                      </a>
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  name="register"
                  id="register"
                  title="Register"
                  className="dark-button"
                >
                  Register
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </section>
    </section>
  );
}
