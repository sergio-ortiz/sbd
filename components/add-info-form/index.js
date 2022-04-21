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

  return (
    <form className={container}>
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
      <button onClick={toggleEdit} className={btn}>
        Edit
      </button>
    </form>
  );
};

export default AddInfoForm;
