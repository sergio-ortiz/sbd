//import { useState } from "react";
//import NameField from "../name-field";
//import AddressFields from "../../components/address-fields";
//import PocFields from "../poc-fields";
import TinField from "../tin-field";
import DisadvCheckboxes from "../disadv-checkboxes";
import YearField from "../year-field";
import SelectType from "../select-type";
import EmployeesField from "../employees-field";
import RevenueField from "../revenue-field";
import SelectIndustry from "../select-industry";
import NaicsField from "../naics-field";
import {
  container,
  input,
  row,
  add,
  btn,
} from "./create-business-form.module.css";

export default function UpdateBusinessForm({ body }) {
  /* const [nameCount, setNameCount] = useState(0);
  const [diffMailAddress, setDiffMailAddress] = useState(false);

  const altNameFields = Array(nameCount).fill();

  const addNameField = (e) => {
    e.preventDefault();
    setNameCount(nameCount + 1);
  };
 */
  console.log(body);
  return (
    <form className={container}>
      <label htmlFor="name">Official Business Name</label>
      <input
        type="text"
        name="name"
        value={body.names[0].content}
        className={input}
        required
        disabled
      />
      {/* {altNameFields.map((e, i) => (
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
      <PocFields label="CEO" />
      <PocFields label="Other POC" />
      <hr /> */}
      <TinField value={body.tin} disabled={true} />
      <DisadvCheckboxes
        womanOwned={body.womanOwned}
        veteranOwned={body.veteranOwned}
        minorityCertified={body.minorityCertified}
        disabled={true}
      />
      <hr />
      <YearField value={body.year} disabled={true} />
      <SelectType value={body.type} disabled={true} />
      <EmployeesField value={body.employees} disabled={true} />
      <RevenueField value={body.revenue} disabled={true} />
      <SelectIndustry value={body.industry} disabled={true} />
      <NaicsField value={body.naicsCode} disabled={true} />
    </form>
  );
}
