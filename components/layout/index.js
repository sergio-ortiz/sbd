import styles from "./layout.module.css";
import Nav from "../nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
