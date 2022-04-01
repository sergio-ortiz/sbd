import { input } from "./revenue-field.module.css";

export default () => (
  <>
    <label htmlFor="revenue">AVG Rev Last 3 Years</label>
    <input
      type="number"
      name="revenue"
      className={input}
      placeholder="Revenue"
    />
  </>
);
