import { input } from "./name-field.module.css";

const NameField = () => (
  <input
    type="text"
    name="name"
    placeholder="Alternate Name"
    className={input}
  />
);

export default NameField;
