import { useState } from "react";
import { input } from "./address-fields.module.css";

const AddressFields = ({ address, disabled }) => {
  const arr = address ? address.split(", ") : "";
  const [streetVal, cityVal, countyVal, stateVal] = arr;

  const [street, setStreet] = useState(streetVal ? streetVal : "");
  const [city, setCity] = useState(cityVal ? cityVal : "");
  const [county, setCounty] = useState(countyVal ? countyVal : "");
  const [state, setState] = useState(stateVal ? stateVal : "");

  return (
    <>
      <label>Address</label>
      <input
        type="text"
        className={input}
        value={street}
        placeholder="Street"
        required
        onInput={(e) => setStreet(e.target.value)}
        disabled={disabled}
      />
      <input
        type="text"
        className={input}
        value={city}
        placeholder="City"
        required
        onInput={(e) => setCity(e.target.value)}
        disabled={disabled}
      />
      <input
        type="text"
        className={input}
        value={county}
        placeholder="County"
        required
        onInput={(e) => setCounty(e.target.value)}
        disabled={disabled}
      />
      <input
        type="text"
        className={input}
        value={state}
        placeholder="State"
        required
        onInput={(e) => setState(e.target.value)}
        disabled={disabled}
      />
      <input
        type="text"
        name="address"
        value={`${street}, ${city}, ${county} County, ${state}`}
        readOnly
        hidden
      />
    </>
  );
};

export default AddressFields;
