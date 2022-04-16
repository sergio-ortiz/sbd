import { input } from "./select-industry.module.css";

const SelectIndustry = ({ value, disabled }) => (
  <>
    <label htmlFor="industry">Select Your Industry</label>
    <select
      name="industry"
      className={input}
      value={value}
      disabled={disabled}
      required
    >
      <option value="">--Please choose an option--</option>
      <option value="Construction/Trade">Construction/Trade</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Hospitality">Hospitality</option>
      <option value="Software/IT/Cyber Security">
        Software/IT/Cyber Security
      </option>
      <option value="Admin Services">Admin Services</option>
      <option value="Professional Services">Professional Services</option>
      <option value="Arts/Entertainment">Arts/Entertainment</option>
      <option value="Business Consulting">Business Consulting</option>
      <option value="Restaurant/Retail">Restaurant/Retail</option>
      <option value="Other">Other</option>
    </select>
  </>
);

export default SelectIndustry;
