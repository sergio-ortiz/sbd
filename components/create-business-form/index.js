import styles from "./create-business-form.module.css";

export default function CreateBusinessForm() {
  return (
    <form
      className={styles["flex-container"]}
      action="/api/check-for-business"
      method="post"
    >
      <label htmlFor="name">Official Business Name</label>
      <span className={styles.asterisk}>*AS REGISTERED IN IRS</span>
      <input
        type="text"
        name="name"
        placeholder="Official Name"
        className={styles["text-input"]}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Alternate Name"
        className={styles["text-input"]}
      />
      <input
        type="text"
        name="name"
        placeholder="Alternate Name"
        className={styles["text-input"]}
      />
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </form>
  );
}
