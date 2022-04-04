import { input } from "./poc-fields.module.css";

const PocFields = ({ label }) => (
  <>
    <label>{label}</label>
    <input type="text" name="poc" className={input} placeholder="Name" />
    <input type="tel" name="phone" className={input} placeholder="Phone" />
    <input type="email" name="email" className={input} placeholder="Email" />
  </>
);

export default PocFields;
