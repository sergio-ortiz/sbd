import { noBox, legend, row } from "./disadv-checkboxes.module.css";

const DisadvCheckboxes = ({
  womanOwned,
  veteranOwned,
  minorityCertified,
  disabled,
}) => (
  <fieldset className={noBox} disabled={disabled}>
    <legend className={legend}>SB/Disadvantaged: check all that apply</legend>
    <hr />
    <div className={row}>
      <label htmlFor="woman">Woman Owned</label>
      <input
        id="woman"
        name="womanOwned"
        type="checkbox"
        defaultChecked={womanOwned}
      />
    </div>
    <div className={row}>
      <label htmlFor="veteran">Veteran Owned</label>
      <input
        id="veteran"
        name="veteranOwned"
        type="checkbox"
        defaultChecked={veteranOwned}
      />
    </div>
    <div className={row}>
      <label htmlFor="minority">Minority Certified</label>
      <input
        id="minority"
        name="minorityCertified"
        type="checkbox"
        defaultChecked={minorityCertified}
      />
    </div>
  </fieldset>
);

export default DisadvCheckboxes;
