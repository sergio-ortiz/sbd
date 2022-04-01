import { input } from "./naics-field.module.css";

export default () => (
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
