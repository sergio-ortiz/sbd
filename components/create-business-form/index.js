import styles from "./create-business-form.module.css";

export default function CreateBusinessForm() {
  return (
    <form
      className={styles["flex-container"]}
      action="/api/get-business-by-name"
      method="post"
    >
      <label htmlFor="name">Business: </label>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </form>
  );
}
