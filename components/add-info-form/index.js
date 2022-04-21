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

const AddInfoForm = ({ body }) => (
  <form className={container}>
    <PocFields
      label="CEO"
      poc={body.ceo}
      phone={body.ceoPhone}
      email={body.ceoEmail}
      disabled={true}
    />
    <PocFields
      label="Other POC"
      poc={body.otherPoc}
      phone={body.otherPocPhone}
      email={body.otherPocEmail}
      disabled={true}
    />
    <TinField value={body.tin} disabled={true} />
    <hr />
    <DisadvCheckboxes
      womanOwned={body.womanOwned}
      veteranOwned={body.veteranOwned}
      minorityCertified={body.minorityCertified}
      disabled={true}
    />
    <hr />
    <SelectType value={body.type} disabled={true} />
    <EmployeesField value={body.employees} disabled={true} />
    <RevenueField value={body.revenue} disabled={true} />
    <NaicsField value={body.naicsCode} disabled={true} />
  </form>
);

export default AddInfoForm;
