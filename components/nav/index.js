import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <nav className={styles["flex-container"]}>
        <h1 className={styles.branding}>small Business Directory</h1>
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
      </nav>
    </div>
  );
}
