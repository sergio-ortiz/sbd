import { input } from "./employees-field.module.css";

export default () => (
  <>
    <label htmlFor="employees">Number Of Employees "Present"</label>
    <input
      type="number"
      name="employees"
      className={input}
      placeholder="Employees"
    />
  </>
);
