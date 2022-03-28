import { useState } from "react";
import NameField from "../name-field";
import AddressFields from "../../components/address-fields";
import styles from "./create-business-form.module.css";

export default function CreateBusinessForm() {
  const [nameCount, setNameCount] = useState(0);
  const [diffMailAddress, setDiffMailAddress] = useState(false);

  const altNameFields = Array(nameCount).fill();

  const addNameField = (e) => {
    e.preventDefault();
    setNameCount(nameCount + 1);
  };

  return (
    <form
      className={styles["flex-container"]}
      action="/api/check-for-business"
      method="post"
    >
      <label htmlFor="name">Official Business Name</label>
      <input
        type="text"
        name="name"
        placeholder="**AS REGISTERED IN IRS**"
        className={styles.input}
        required
      />
      {altNameFields.map((e, i) => (
        <NameField key={i} className={styles.input} />
      ))}
      <div className={styles["add-name-div"]}>
        <span>Alternate Names?</span>
        <button onClick={addNameField} className={styles["add-name"]}>
          Add
        </button>
      </div>
      <hr />
      <label htmlFor="year">Year Established</label>
      <input
        type="number"
        name="year"
        className={styles.input}
        placeholder="e.g. 1990"
        required
      />
      <AddressFields />
      <div className={styles["add-name-div"]}>
        <label>Use Different Mailing Address?</label>
        <input
          type="checkbox"
          onClick={() => setDiffMailAddress(!diffMailAddress)}
        />
      </div>
      <hr />
      {diffMailAddress ? <AddressFields /> : ""}
      <hr />
      <label htmlFor="industry">Select Your Industry</label>
      <select name="industry" className={styles.input} required>
        <option value="">--Please choose an option--</option>
        <option value="Construction/Trade">Construction/Trade</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Hospitality">Hospitality</option>
        <option value="Software/IT/Cyber Security">
          Software/IT/Cyber Security
        </option>
        <option value="Admin Services">Admin Services</option>
        <option value="Professional Services">Professional Services</option>
        <option value="Arts/Entertainment">Arts/Entertainment</option>
        <option value="Business Consulting">Business Consulting</option>
        <option value="Restaurant/Retail">Restaurant/Retail</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </form>
  );
}
