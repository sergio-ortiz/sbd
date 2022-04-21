import { useState } from "react";
import PocFields from "../poc-fields";
import TinField from "../tin-field";
import DisadvCheckboxes from "../disadv-checkboxes";
import SelectType from "../select-type";
import EmployeesField from "../employees-field";
import RevenueField from "../revenue-field";
import NaicsField from "../naics-field";
import {
  container,
  input,
  row,
  add,
  btn,
} from "./create-business-form.module.css";

const AddInfoForm = ({ body }) => {
  const [disabled, setDisabled] = useState(true);

  const toggleEdit = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [ceo, otherPoc] = e.target.poc;
    const [ceoPhone, otherPocPhone] = e.target.phone;
    const [ceoEmail, otherPocEmail] = e.target.email;
    const data = {
      ceo: ceo.value,
      ceoPhone: ceoPhone.value,
      ceoEmail: ceoEmail.value,
      otherPoc: otherPoc.value,
      otherPocPhone: otherPocPhone.value,
      otherPocEmail: otherPocEmail.value,
      tin: e.target.tin.value,
      womanOwned: e.target.womanOwned.checked,
      veteranOwned: e.target.veteranOwned.checked,
      minorityCertified: e.target.minorityCertified.checked,
      employees: e.target.employees.value,
      type: e.target.type.value,
      revenue: e.target.revenue.value,
      naicsCode: e.target.naics.value,
    };

    console.log(data);
  };

  return (
    <form className={container} onSubmit={handleSubmit}>
      <PocFields
        label="CEO"
        poc={body.ceo}
        phone={body.ceoPhone}
        email={body.ceoEmail}
        disabled={disabled}
      />
      <PocFields
        label="Other POC"
        poc={body.otherPoc}
        phone={body.otherPocPhone}
        email={body.otherPocEmail}
        disabled={disabled}
      />
      <TinField value={body.tin} disabled={disabled} />
      <hr />
      <DisadvCheckboxes
        womanOwned={body.womanOwned}
        veteranOwned={body.veteranOwned}
        minorityCertified={body.minorityCertified}
        disabled={disabled}
      />
      <hr />
      <SelectType value={body.type} disabled={disabled} />
      <EmployeesField value={body.employees} disabled={disabled} />
      <RevenueField value={body.revenue} disabled={disabled} />
      <NaicsField value={body.naicsCode} disabled={disabled} />
      {disabled ? (
        <button onClick={toggleEdit} className={btn}>
          Edit
        </button>
      ) : (
        <button value="submit" className={btn}>
          Update
        </button>
      )}
    </form>
  );
};

export default AddInfoForm;
