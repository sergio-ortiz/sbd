import Link from "next/link";
import styles from "./add-business-form.module.css";

export default function addBusinessForm({ cipherText }) {
  return (
    <form action="/api/create-business" method="post">
      <div className={styles["btn-group"]}>
        <button
          type="submit"
          name="cipherText"
          value={cipherText}
          className={`${styles.btn} ${styles["yes-btn"]}`}
        >
          Yes
        </button>
        <Link href="/">
          <a>
            <button className={`${styles.btn} ${styles["no-btn"]}`}>No</button>
          </a>
        </Link>
      </div>
    </form>
  );
}
