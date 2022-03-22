import styles from "./create-business-form.module.css";

export default function CreateBusinessForm() {
  return (
    <form
      className={styles["flex-container"]}
      action="/api/get-business-by-name"
      method="post"
    >
      <label htmlFor="name">Official Business Name</label>
      <span>*As Registered IN IRS</span>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Official Name"
        className={styles["text-input"]}
        required
      />
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </form>
  );
}
