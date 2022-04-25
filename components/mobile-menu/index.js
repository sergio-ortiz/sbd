import Link from "next/link";
import { navLinks, navLinkItem, navLinkText } from "./mobile-menu.module.css";

const MobileMenu = ({ toggleMenu }) => (
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <Link href="/">
        <a className={navLinkText} onClick={toggleMenu}>
          Home
        </a>
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link href="/create-business">
        <a className={navLinkText} onClick={toggleMenu}>
          Create
        </a>
      </Link>
    </li>
  </ul>
);

export default MobileMenu;
