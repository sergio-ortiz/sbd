import { input } from "./select-type.module.css";

export default () => (
  <>
    <label htmlFor="type">Type Of Business</label>
    <select name="type" className={input}>
      <option value="">--Please choose an option--</option>
      <option value="C corp">Corporation "C corp"</option>
      <option value="Non-Profit">Non-Profit</option>
      <option value="LLC">LLC</option>
      <option value="S corp">S corp</option>
      <option value="Sole Proprietor/Partnership">
        Sole Proprietor/Partnersip
      </option>
      <option value="Franchise">Franchise</option>
    </select>
  </>
);
