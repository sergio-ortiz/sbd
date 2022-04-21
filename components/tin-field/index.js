import { input } from "./tin-field.module.css";

const TinField = ({ value, disabled }) => (
  <>
    <label htmlFor="tin">TIN#</label>
    <input
      type="number"
      name="tin"
      className={input}
      defaultValue={value ? value : ""}
      placeholder="Tax ID Number"
      disabled={disabled}
    />
  </>
);

export default TinField;
