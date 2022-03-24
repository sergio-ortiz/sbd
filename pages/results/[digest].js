import { useRouter } from "next/router";
import Layout from "../../components/layout";
import AddBusinessForm from "../../components/add-business-form";

export default function results() {
  const router = useRouter();
  const { digest } = router.query;
  return (
    <Layout>
      <h3>Found existing business in directory, would you like to add it?</h3>
      <AddBusinessForm cipherText={digest} />
    </Layout>
  );
}
