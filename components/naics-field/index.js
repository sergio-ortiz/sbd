import { input } from "./naics-field.module.css";

const NaicsField = () => (
  <>
    <label htmlFor="naics">NAICS Code</label>
    <input
      type="number"
      name="naics"
      className={input}
      min="100000"
      max="999999"
      placeholder="NAICS Code"
    />
  </>
);

export default NaicsField;
