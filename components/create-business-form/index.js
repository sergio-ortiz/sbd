import { useState } from "react";
import NameField from "../name-field";
import styles from "./create-business-form.module.css";

export default function CreateBusinessForm() {
  const [state, setState] = useState(0);
  const altNameFields = Array(state).fill();

  const handleClick = (e) => {
    e.preventDefault();
    setState(state + 1);
  };

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
      {altNameFields.map((e, i) => (
        <NameField key={i} />
      ))}
      <div className={styles["add-name-div"]}>
        <span>Alternate Names?</span>
        <button onClick={handleClick} className={styles["add-name"]}>
          Add
        </button>
      </div>
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </form>
  );
}
