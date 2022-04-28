import Link from "next/link";
import styles from "./add-business-form.module.css";

export default function addBusinessForm({ json }) {
  return (
    <form action="/api/create-business" method="post">
      <h2>Would you like to create a new entry?</h2>
      <div className={styles["btn-group"]}>
        <button
          type="submit"
          name="json"
          value={json}
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
