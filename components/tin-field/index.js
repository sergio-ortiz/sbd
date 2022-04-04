import { input } from "./tin-field.module.css";

const TinField = () => (
  <>
    <label htmlFor="tin">TIN#</label>
    <input
      type="number"
      name="tin"
      className={input}
      placeholder="Tax ID Number"
    />
  </>
);

export default TinField;
