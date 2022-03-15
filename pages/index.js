import { useState } from "react";
import CreateBusinessForm from "../components/create-business-form";

export default function Home() {
  const [availability, setAvailability] = useState("availability?");
  return (
    <div>
      <h1>Check name availability</h1>
      <CreateBusinessForm setState={setAvailability} />
      <p>{availability}</p>
    </div>
  );
}
