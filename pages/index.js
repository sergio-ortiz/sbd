import { useState } from "react";
import Layout from "../components/layout";
import CreateBusinessForm from "../components/create-business-form";

export default function Home() {
  const [availability, setAvailability] = useState("availability?");
  return (
    <Layout>
      <h1>Create Business Entry</h1>
      <CreateBusinessForm setState={setAvailability} />
      <p>{availability}</p>
    </Layout>
  );
}
