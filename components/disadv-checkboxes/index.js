import { noBox, legend, row } from "./disadv-checkboxes.module.css";

export default () => (
  <fieldset className={noBox}>
    <legend className={legend}>SB/Disadvantaged: check all that apply</legend>
    <hr />
    <div className={row}>
      <label htmlFor="woman">Woman Owned</label>
      <input id="woman" name="womanOwned" type="checkbox" />
    </div>
    <div className={row}>
      <label htmlFor="veteran">Veteran Owned</label>
      <input id="veteran" name="veteranOwned" type="checkbox" />
    </div>
    <div className={row}>
      <label htmlFor="minority">Minority Certified</label>
      <input id="minority" name="minorityCertified" type="checkbox" />
    </div>
  </fieldset>
);
