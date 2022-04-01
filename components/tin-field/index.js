import { input } from "./tin-field.module.css";

export default () => (
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
