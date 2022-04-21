import { input } from "./employees-field.module.css";

const EmployeesField = ({ value, disabled }) => (
  <>
    <label htmlFor="employees">Number Of Employees &quot;Present&quot;</label>
    <input
      type="number"
      name="employees"
      className={input}
      defaultValue={value ? value : ""}
      placeholder="Employees"
      disabled={disabled}
    />
  </>
);

export default EmployeesField;
