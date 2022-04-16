import { input } from "./year-field.module.css";

const YearField = ({ value, disabled }) => (
  <>
    <label htmlFor="year">Year Established</label>
    <input
      type="number"
      name="year"
      className={input}
      value={value}
      placeholder="e.g. 1990"
      required
      disabled={disabled}
    />
  </>
);

export default YearField;
