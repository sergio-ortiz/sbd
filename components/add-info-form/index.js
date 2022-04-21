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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [ceo, otherPoc] = e.target.poc;
    const [ceoPhone, otherPocPhone] = e.target.phone;
    const [ceoEmail, otherPocEmail] = e.target.email;

    const data = {
      ceo: ceo.value || null,
      ceoPhone: ceoPhone.value || null,
      ceoEmail: ceoEmail.value || null,
      otherPoc: otherPoc.value || null,
      otherPocPhone: otherPocPhone.value || null,
      otherPocEmail: otherPocEmail.value || null,
      tin: parseInt(e.target.tin.value),
      womanOwned: e.target.womanOwned.checked,
      veteranOwned: e.target.veteranOwned.checked,
      minorityCertified: e.target.minorityCertified.checked,
      employees: parseInt(e.target.employees.value),
      type: e.target.type.value || null,
      revenue: parseInt(e.target.revenue.value),
      naicsCode: parseInt(e.target.naics.value),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: body.id, data }),
    };

    const response = await fetch("/api/update-business", options);
    const result = await response.json();

    console.log(result);

    setDisabled(true);
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
        <button
          onClick={(e) => {
            e.preventDefault();
            setDisabled(false);
          }}
          className={btn}
        >
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
