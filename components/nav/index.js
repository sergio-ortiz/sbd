import { useState } from "react";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import styles from "./nav.module.css";

export default function Nav() {
  const [mobile, setMobile] = useState(false);

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
              <a className={styles["nav-link-text"]}>Home</a>
            </Link>
          </li>
          <li className={styles["nav-link-item"]}>
            <Link href="/create-business">
              <a className={styles["nav-link-text"]}>Create</a>
            </Link>
          </li>
        </ul>
        {mobile ? <MobileMenu /> : null}
        <button className={styles.hamburger} onClick={() => setMobile(!mobile)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </nav>
    </div>
  );
}
