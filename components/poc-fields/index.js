import { input } from "./poc-fields.module.css";

const PocFields = ({ label, poc, phone, email, disabled }) => (
  <>
    <label>{label}</label>
    <input
      type="text"
      name="poc"
      className={input}
      value={poc ? poc : ""}
      placeholder="Name"
      disabled={disabled}
    />
    <input
      type="tel"
      name="phone"
      className={input}
      value={phone ? phone : ""}
      placeholder="Phone"
      disabled={disabled}
    />
    <input
      type="email"
      name="email"
      className={input}
      value={email ? email : ""}
      placeholder="Email"
      disabled={disabled}
    />
  </>
);

export default PocFields;
