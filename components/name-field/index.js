import styles from "./name-field.module.css";

export default function NameField(key) {
  return (
    <input
      key={key}
      type="text"
      name="name"
      placeholder="Alternate Name"
      className={styles["name-field"]}
    />
  );
}
