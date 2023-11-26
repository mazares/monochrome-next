import Link from 'next/link';

export default function StyleForm() {
  return (
    <section className="style-form mt-4 mt-lg-5 container">
      <header className="style-form-header">
        <h1>Style &amp; fit advice</h1>

        <p>
          To find the perfect fit and style for you, please provide us with the
          info bellow and a consultant will contact you for a discussion. This
          way we can customize your watch on your needs.
        </p>
      </header>

      <section className="style-form mt-3">
        <form>
          <fieldset>
            <legend>Find your fit and style</legend>

            <div>
              <label className="d-block label" htmlFor="gender">
                1. Choose one
              </label>

              <div className="input-container">
                <input
                  type="radio"
                  name="gender"
                  id="men"
                  value="men"
                  defaultChecked
                ></input>
                <label htmlFor="men">Men&apos;s</label>

                <input
                  type="radio"
                  name="gender"
                  id="women"
                  value="women"
                ></input>
                <label htmlFor="women">Women&apos;s</label>
              </div>
            </div>

            <div>
              <label className="label" htmlFor="watch-model">
                2. What model do you preffer?
              </label>

              <select
                name="watch-model"
                id="watch-model"
                className="watch-model"
                required
              >
                <option value="">--Choose a model--</option>
                <option value="laBohemePetit">La Boheme Petit</option>
                <option value="laBoheme">La Boheme</option>
                <option value="triomph">Triomph</option>
                <option value="lecournnement">Le Couronnement</option>
              </select>

              <div className="image-container">
                <img
                  src="/images/model.png"
                  alt="Watch models"
                  title="Watch models"
                  className="d-none d-md-block"
                ></img>
              </div>
            </div>

            <div>
              <label className="label" htmlFor="wrist-number">
                3. Please give us the size of your wrist
              </label>

              <input
                type="number"
                name="wrist-size"
                id="wrist-size"
                placeholder="Wrist size"
                className="input"
                required
              ></input>
            </div>

            <div>
              <label className="label" htmlFor="gravation">
                4. Gravation on the back
              </label>

              <input
                type="text"
                name="gravation"
                id="gravation"
                placeholder="Gravation"
                className="input"
                maxLength="10"
              ></input>

              <div className="image-container">
                <img
                  src="/images/gravation.png"
                  alt="Gravation"
                  title="Gravation"
                  className="d-none d-md-block"
                ></img>
              </div>
            </div>

            <div>
              <label className="label" htmlFor="details">
                5. Anything else you want to add?
              </label>

              <textarea
                name="details"
                id="details"
                cols="40"
                rows="4"
                placeholder="Add details"
                className="details"
              ></textarea>
            </div>

            <div>
              <label className="label" htmlFor="email-style">
                6. Provide us an email to get back to you
              </label>

              <input
                type="email"
                name="email-style"
                id="email-style"
                placeholder="Email Address"
                className="input"
                required
              ></input>
            </div>

            <div className="terms-conditions mt-3">
              <input
                type="checkbox"
                name="terms-style"
                id="terms-style"
                required
              ></input>

              <label
                htmlFor="terms-style"
                title="I agree with terms and conditions"
              >
                I agree with
                <Link href="/">
                  <a
                    title="Privacy Policy"
                    className="text-decoration-underline mx-1"
                  >
                    terms and conditions
                  </a>
                </Link>
              </label>

              <input type="checkbox" name="news" id="news"></input>

              <label htmlFor="news" title="Send me news via email">
                Send me news via email
              </label>
            </div>

            <button
              type="submit"
              name="style-form"
              id="style-form"
              className="button mt-3"
              title="Submit"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </section>
    </section>
  );
}
