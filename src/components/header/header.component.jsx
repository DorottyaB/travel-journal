import logo from '../../assets/logo.svg';
import './header.styles.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt='Logo' />
      <p>my travel journal.</p>
    </header>
  );
}
