import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/">
            <a className={styles["nav-link-text"]}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/create-business">
            <a className={styles["nav-link-text"]}>Create</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
