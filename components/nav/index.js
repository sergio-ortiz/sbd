import { useState } from "react";
import Link from "next/link";
import CreateButton from "../create-button";
import SearchBar from "../search-bar";
import MobileMenu from "../mobile-menu";
import styles from "./nav.module.css";

export default function Nav() {
  const [mobile, setMobile] = useState(false);

  const toggleMenu = () => setMobile(!mobile);

  return (
    <div className={styles.navbar}>
      <nav className={styles["flex-container"]}>
        <Link href="/">
          <a className={styles.branding}>
            <h1>sbd</h1>
          </a>
        </Link>
        <ul className={styles["nav-links"]}>
          <li className={styles["nav-link-item"]}>
            <Link href="/">
              <a className={styles["nav-link-text"]}>Home &#x1F3E0;</a>
            </Link>
          </li>
          <li className={styles["nav-link-item"]}>
            <CreateButton />
          </li>
          <li className={styles["nav-link-item"]}>
            <SearchBar />
          </li>
        </ul>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
        <MobileMenu toggleMenu={toggleMenu} mobile={mobile} />
      </nav>
    </div>
  );
}
