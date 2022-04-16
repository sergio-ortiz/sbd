import { input } from "./naics-field.module.css";

const NaicsField = ({ value, disabled }) => (
  <>
    <label htmlFor="naics">NAICS Code</label>
    <input
      type="number"
      name="naics"
      className={input}
      min="100000"
      max="999999"
      value={value}
      placeholder="NAICS Code"
      disabled={disabled}
    />
  </>
);

export default NaicsField;
