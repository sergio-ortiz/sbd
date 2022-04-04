import { useState } from "react";
import { input } from "./address-fields.module.css";

const AddressFields = () => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <label>Address</label>
      <input
        type="text"
        className={input}
        placeholder="Street"
        required
        onInput={(e) => setStreet(e.target.value)}
      />
      <input
        type="text"
        className={input}
        placeholder="City"
        required
        onInput={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        className={input}
        placeholder="County"
        required
        onInput={(e) => setCounty(e.target.value)}
      />
      <input
        type="text"
        className={input}
        placeholder="State"
        required
        onInput={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        name="address"
        value={`${street} ${city}, ${county} County, ${state}`}
        readOnly
        hidden
      />
    </>
  );
};

export default AddressFields;
