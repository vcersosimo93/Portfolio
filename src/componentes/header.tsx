import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/acerca">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;