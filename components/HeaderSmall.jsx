import HeaderPrimary from './HeaderPrimary';
import HeaderSecondarySmall from './HeaderSecondarySmall';

export default function HeaderSmall() {
  return (
    <header className="header">
      <HeaderSecondarySmall></HeaderSecondarySmall>

      <HeaderPrimary></HeaderPrimary>
    </header>
  );
}
