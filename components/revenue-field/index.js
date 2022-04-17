import { input } from "./revenue-field.module.css";

const RevenueField = ({ value, disabled }) => (
  <>
    <label htmlFor="revenue">AVG Rev Last 3 Years</label>
    <input
      type="number"
      name="revenue"
      className={input}
      value={value ? value : ""}
      disabled={disabled}
      placeholder="Revenue"
    />
  </>
);

export default RevenueField;
