import Link from "next/link";
import styles from "./dym-form.module.css";

export default function DymForm({ name }) {
  return (
    <form action="/api/create-business" method="post">
      <div className={styles["btn-group"]}>
        <Link href="/thankyou">
          <a>
            <button className={`${styles.btn} ${styles["yes-btn"]}`}>
              Yes
            </button>
          </a>
        </Link>
        <button
          type="submit"
          name="name"
          value={name}
          className={`${styles.btn} ${styles["no-btn"]}`}
        >
          No
        </button>
      </div>
    </form>
  );
}
