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

      <AddressFields />
      {diffMailAddress ? <AddressFields /> : ""}
      <div className={styles["add-name-div"]}>
        <label htmlFor="diffAddressCheckbox">
          Use Different Mailing Address?
        </label>
        <input
          id="diffAddressCheckbox"
          type="checkbox"
          onClick={() => setDiffMailAddress(!diffMailAddress)}
        />
      </div>
      <hr />
      <label>CEO</label>
      <input
        type="text"
        name="poc"
        className={styles.input}
        placeholder="Name"
      />
      <input
        type="tel"
        name="phone"
        className={styles.input}
        placeholder="Phone"
      />
      <input
        type="email"
        name="email"
        className={styles.input}
        placeholder="Email"
      />
      <label>Other POC</label>
      <input
        type="text"
        name="poc"
        className={styles.input}
        placeholder="Name"
      />
      <input
        type="tel"
        name="phone"
        className={styles.input}
        placeholder="Phone"
      />
      <input
        type="email"
        name="email"
        className={styles.input}
        placeholder="Email"
      />
      <hr />
      <label htmlFor="tin">TIN#</label>
      <input
        type="number"
        name="tin"
        className={styles.input}
        placeholder="Tax ID Number"
      />
      <hr />
      <fieldset className={styles["no-box"]}>
        <legend className={styles.legend}>
          Minority/Disadvantage: check all that apply
        </legend>
        <hr />
        <div className={styles["add-name-div"]}>
          <label htmlFor="woman">Woman Owned</label>
          <input id="woman" name="womanOwned" type="checkbox" />
        </div>
        <div className={styles["add-name-div"]}>
          <label htmlFor="veteran">Veteran Owned</label>
          <input id="veteran" name="veteranOwned" type="checkbox" />
        </div>
        <div className={styles["add-name-div"]}>
          <label htmlFor="minority">Minority Certified</label>
          <input id="minority" name="minorityCertified" type="checkbox" />
        </div>
      </fieldset>
      <hr />
      <label htmlFor="year">Year Established</label>
      <input
        type="number"
        name="year"
        className={styles.input}
        placeholder="e.g. 1990"
        required
      />
      <label htmlFor="type">Type Of Business</label>
      <select name="type" className={styles.input}>
        <option value="">--Please choose an option--</option>
        <option value="C corp">Corporation "C corp"</option>
        <option value="Non-Profit">Non-Profit</option>
        <option value="LLC">LLC</option>
        <option value="S corp">S corp</option>
        <option value="Sole Proprietor/Partnership">
          Sole Proprietor/Partnersip
        </option>
        <option value="Franchise">Franchise</option>
      </select>
      <hr />
      <label htmlFor="employees">Number Of Employees "Present"</label>
      <input
        type="number"
        name="employees"
        className={styles.input}
        placeholder="Employees"
      />
      <label htmlFor="revenue">AVG Rev Last 3 Years</label>
      <input
        type="number"
        name="revenue"
        className={styles.input}
        placeholder="Revenue"
      />
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
      <hr />
      <label htmlFor="naics">NAICS Code</label>
      <input
        type="number"
        name="naics"
        className={styles.input}
        min="100000"
        max="999999"
        placeholder="NAICS Code"
      />
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </form>
  );
}
