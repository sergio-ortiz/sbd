import { input } from "./poc-fields.module.css";

const PocFields = ({ label, poc, phone, email, disabled }) => (
  <>
    <label>{label}</label>
    <input
      type="text"
      name="poc"
      className={input}
      defaultValue={poc ? poc : ""}
      placeholder="Name"
      disabled={disabled}
    />
    <input
      type="tel"
      name="phone"
      className={input}
      defaultValue={phone ? phone : ""}
      placeholder="Phone"
      disabled={disabled}
    />
    <input
      type="email"
      name="email"
      className={input}
      defaultValue={email ? email : ""}
      placeholder="Email"
      disabled={disabled}
    />
  </>
);

export default PocFields;
