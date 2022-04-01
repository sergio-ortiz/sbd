import { input } from "./poc-fields.module.css";

export default ({ label }) => (
  <>
    <label>{label}</label>
    <input type="text" name="poc" className={input} placeholder="Name" />
    <input type="tel" name="phone" className={input} placeholder="Phone" />
    <input type="email" name="email" className={input} placeholder="Email" />
  </>
);
