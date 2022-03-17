import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function DoYouMean() {
  const router = useRouter();

  const { name } = router.query;

  return (
    <Layout>
      <h1>Do you mean {name}?</h1>
    </Layout>
  );
}
