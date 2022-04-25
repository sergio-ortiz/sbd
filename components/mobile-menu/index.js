import Link from "next/link";
import { navLinks, navLinkItem, navLinkText } from "./mobile-menu.module.css";

const MobileMenu = () => (
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <Link href="/">
        <a className={navLinkText}>Home</a>
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link href="/create-business">
        <a className={navLinkText}>Create</a>
      </Link>
    </li>
  </ul>
);

export default MobileMenu;
