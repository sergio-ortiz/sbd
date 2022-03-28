import { useState } from "react";
import styles from "./address-fields.module.css";

export default function AddressFields() {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [state, setState] = useState("");

  return (
    <div className={styles["flex-container"]}>
      <label>Address</label>
      <input
        type="text"
        className={styles.input}
        placeholder="Street"
        required
        onInput={(e) => setStreet(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="City"
        required
        onInput={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="County"
        required
        onInput={(e) => setCounty(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="State"
        required
        onInput={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        name="address"
        value={`${street} ${city}, ${county} County, ${state}`}
        readOnly
        hidden
      />
    </div>
  );
}
