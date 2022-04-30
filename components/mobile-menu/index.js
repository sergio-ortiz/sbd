import Link from "next/link";
import CreateButton from "../create-button";
import SearchBar from "../search-bar";
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
          Home &#x1F3E0;
        </a>
      </Link>
    </li>
    <CreateButton />
    <br />
    <SearchBar />
  </ul>
);

export default MobileMenu;
