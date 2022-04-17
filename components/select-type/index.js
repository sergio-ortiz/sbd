import { input } from "./select-type.module.css";

const SelectType = ({ value, disabled }) => (
  <>
    <label htmlFor="type">Type Of Business</label>
    <select
      name="type"
      className={input}
      value={value ? value : ""}
      disabled={disabled}
    >
      <option value="C corp">Corporation &quot;C corp&quot;</option>
      <option value="Non-Profit">Non-Profit</option>
      <option value="LLC">LLC</option>
      <option value="S corp">S corp</option>
      <option value="Sole Proprietor/Partnership">
        Sole Proprietor/Partnersip
      </option>
      <option value="Franchise">Franchise</option>
      <option value="">--Please choose an option--</option>
    </select>
  </>
);

export default SelectType;
