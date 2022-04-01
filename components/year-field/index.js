import { input } from "./year-field.module.css";

export default () => (
  <>
    <label htmlFor="year">Year Established</label>
    <input
      type="number"
      name="year"
      className={input}
      placeholder="e.g. 1990"
      required
    />
  </>
);
