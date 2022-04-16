import { useState } from "react";
import NameField from "../name-field";
import AddressFields from "../../components/address-fields";
import YearField from "../year-field";
import SelectIndustry from "../select-industry";
import {
  container,
  input,
  row,
  add,
  btn,
} from "./create-business-form.module.css";

export default function CreateBusinessForm() {
  const [nameCount, setNameCount] = useState(0);
  const [diffMailAddress, setDiffMailAddress] = useState(false);

  const altNameFields = Array(nameCount).fill();

  const addNameField = (e) => {
    e.preventDefault();
    setNameCount(nameCount + 1);
  };

  return (
    <form className={container} action="/api/check-for-business" method="post">
      <label htmlFor="name">Official Business Name</label>
      <input
        type="text"
        name="name"
        placeholder="**AS REGISTERED IN IRS**"
        className={input}
        required
      />
      {altNameFields.map((e, i) => (
        <NameField key={i} />
      ))}
      <div className={row}>
        <span>Alternate Names?</span>
        <button onClick={addNameField} className={add}>
          Add
        </button>
      </div>

      <AddressFields />
      {diffMailAddress ? <AddressFields /> : ""}
      <div className={row}>
        <label htmlFor="diffAddressCheckbox">
          Use Different Mailing Address?
        </label>
        <input
          id="diffAddressCheckbox"
          type="checkbox"
          onClick={() => setDiffMailAddress(!diffMailAddress)}
        />
      </div>
      <hr />
      <YearField />
      <SelectIndustry />
      <hr />
      <button type="submit" className={btn}>
        Create
      </button>
    </form>
  );
}
