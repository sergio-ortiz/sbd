import { input } from "./name-field.module.css";

const NameField = ({ value, disabled }) => (
  <input
    type="text"
    name="name"
    value={value}
    placeholder="Alternate Name"
    className={input}
    disabled={disabled}
  />
);

export default NameField;
