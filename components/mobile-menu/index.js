import Link from "next/link";
import {
  navLinks,
  show,
  navLinkItem,
  navLinkText,
} from "./mobile-menu.module.css";

const MobileMenu = ({ toggleMenu, mobile }) => (
  <ul className={mobile ? `${navLinks} ${show}` : navLinks}>
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
