import ActiveLink from './../ActiveLink';

export default function PaymentBar() {
  return (
    <section className="payment-bar">
      <ul className="payment-bar-progress">
        <li>
          <ActiveLink href="/order-sign-in" activeClassName="active">
            <a title="Sign in">Sign in</a>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/shipping" activeClassName="active">
            <a title="Shipping">Shipping</a>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/billing" activeClassName="active">
            <a title="Billing">Billing</a>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/confirm" activeClassName="active">
            <a title="Confirm">Confirm</a>
          </ActiveLink>
        </li>
      </ul>
    </section>
  );
}
