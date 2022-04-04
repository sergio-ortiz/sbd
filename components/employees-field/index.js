import { input } from "./employees-field.module.css";

const EmployeesField = () => (
  <>
    <label htmlFor="employees">Number Of Employees &quot;Present&quot;</label>
    <input
      type="number"
      name="employees"
      className={input}
      placeholder="Employees"
    />
  </>
);

export default EmployeesField;
